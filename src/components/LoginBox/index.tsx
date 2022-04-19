import Image from 'next/image'
import * as S from './styles'

export function LoginBox() {
  return (
    <S.FormLogin>
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
          // value={value}
        />
      </S.Field>

      <S.Field>
        <S.Label>Senha</S.Label>
        <S.Input
          type="password"
          id="password"
          name="password"
          // value={value}
        />
      </S.Field>

      <S.Button
        type="submit"
      >
        Entrar
      </S.Button>
    </S.FormLogin>
  )
}
