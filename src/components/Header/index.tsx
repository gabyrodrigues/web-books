import Image from 'next/image'
import { useContext } from 'react'

import { FiLogOut } from 'react-icons/fi'

import { AuthContext } from '../../contexts/auth'
import { FlexWrapper } from '../../styles/general'

import * as S from './styles'

export function Header() {
  const { signOut, user } = useContext(AuthContext)

  return (
    <>
      <S.Header>
        <FlexWrapper>
          <Image
            src='/dark-logo.svg'
            alt='ioasys'
            width={105}
            height={36}
          />

          <S.Title>Books</S.Title>
        </FlexWrapper>

        <FlexWrapper>
          <S.Greeting>
            Bem vind{user?.gender == 'M' ? 'o' : 'a'}, <strong>{user?.name}</strong>
          </S.Greeting>

          <S.SignOutButton onClick={signOut}>
            <FiLogOut color="#333" size="16" />
          </S.SignOutButton>
        </FlexWrapper>
      </S.Header>
    </>
  )
}
