import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";


type User = {
  id: string;
  name: string;
	email: string;
	birthdate: string;
	gender: string;
}

type AuthContextData = {
  user: User | null;
  signIn: (email: string, password: string) => void;
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

  async function signIn(email: string, password: string) {
    await api.post<User>('/auth/sign-in', {
      email,
      password
    }).then(response => {
      const user = response.data
      const token = response.headers.authorization
      console.log(response)

      localStorage.setItem('@ioasys-books:token', token)

      setUser(user)
      setStatusCode(response.status)

      console.log(user, token)
    }).catch(({ response }) => {
      setStatusCode(response.status)
    })

  }

  function signOut() {
    setUser(null)
    localStorage.removeItem('@ioasys-books:token')
  }

  return(
    <AuthContext.Provider value={{ statusCode, user, signIn, signOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}
