import styled from 'styled-components'

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 100%;
`

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 300;
  margin-left: 16px;
`

export const Greeting = styled.h1`
  font-size: 12px;
  font-weight: 300;
  margin-left: 16px;
`

export const SignOutButton = styled.button`
  background: transparent;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 50%;
  cursor: pointer;
  height: 32px;
  margin-left: 16px;
  width: 32px;

  align-items: center;
  display: flex;
  justify-content: center;

  &:hover {
    filter: brightness(0.9);
  }
`
