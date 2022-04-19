import Image from 'next/image'
import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '../../contexts/auth'

import * as S from './styles'

export function LoginBox() {
  const { signIn, statusCode, user } = useContext(AuthContext)

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  async function Login(event: FormEvent) {
    event.preventDefault()

    signIn(email, password)
  }

  return (
    <>
      <S.FormLogin onSubmit={Login}>
        <S.LoginHeader>
          <Image
            src='/logo.svg'
            height={36}
            width={104}
          />
          <p>Books</p>
        </S.LoginHeader>


        <S.Field>
          <S.Label>Email</S.Label>
          <S.Input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </S.Field>

        <S.Field>
          <S.Label>Senha</S.Label>
          <S.Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </S.Field>

        <S.Button
          type="submit"
        >
          Entrar
        </S.Button>
      </S.FormLogin>
      {console.log("user", user)}
      {(statusCode && statusCode == 401) && (
        <S.LoginWarning>
          <p>Email e/ou senha incorretos.</p>
        </S.LoginWarning>
      )}
    </>
  )
}
