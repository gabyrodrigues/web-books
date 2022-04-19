import Router from 'next/router'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from '../services/api'


type User = {
  id: string;
  name: string;
	email: string;
	birthdate: string;
	gender: string;
}

type AuthContextData = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  statusCode: number | null;
}

export const AuthContext = createContext({} as AuthContextData)

type AuthProvider = {
  children: ReactNode;
}

export function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>(null)
  const [statusCode, setStatusCode] = useState<number | null>(null)

  const isAuthenticated = !!user

  useEffect(() => {
    const { '@ioasys-books:user': user } = parseCookies()

    if(user) {
      setUser(JSON.parse(user))
    }
  }, [])

  async function signIn(email: string, password: string) {
    await api.post<User>('/auth/sign-in', {
      email,
      password
    }).then((response) => {
      const user = response.data
      const token = response.headers.authorization
      console.log(response)

      // localStorage.setItem('@ioasys-books:token', token)
      setCookie(undefined, '@ioasys-books:token', token, {
        maxAge: 30 * 24 * 60 * 60
      })

      setCookie(undefined, '@ioasys-books:user', JSON.stringify(user), {
        maxAge: 30 * 24 * 60 * 60
      })

      setUser(user)
      setStatusCode(response.status)

      console.log(user, token)

      Router.push('/')
    }).catch(({ response }) => {
      setStatusCode(response.status)
    })

  }

  function signOut() {
    setUser(null)
    destroyCookie(null, '@ioasys-books:token')
    destroyCookie(null, '@ioasys-books:user')
    // localStorage.removeItem('@ioasys-books:token')
  }

  return(
    <AuthContext.Provider value={{ statusCode, user, isAuthenticated, signIn, signOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}
