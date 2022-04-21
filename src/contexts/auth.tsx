import Router from 'next/router'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from '../services/api'
import createCookie from '../services/createCookie'


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
    console.log("user", user)
    if(user) {
      setUser(JSON.parse(user))
    }
  }, [])

  async function signIn(email: string, password: string) {
    await api.post<User>('/auth/sign-in', {
      email,
      password
    }).then((response) => {
      console.log(response)

      const user = response.data
      const token = response.headers['authorization']
      const refreshToken = response.headers['refresh-token']

      createCookie('@ioasys-books:token', token)
      createCookie('@ioasys-books:refresh-token', refreshToken)
      createCookie('@ioasys-books:user', JSON.stringify(user))

      api.defaults.headers['Authorization'] = `Bearer ${token}`

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
    destroyCookie(null, '@ioasys-books:refresh-token')
    destroyCookie(null, '@ioasys-books:user')

    Router.push('/')
  }

  return(
    <AuthContext.Provider value={{ statusCode, user, isAuthenticated, signIn, signOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}
