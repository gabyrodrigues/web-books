import styled from 'styled-components'

export const FormLogin = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  max-width: 368px;
  position: relative;
`

export const LoginHeader = styled.div`
  display: flex;
  margin-bottom: 48px;

  p {
    color: ${props => props.theme.colors.light};
    font-size: 28px;
    font-weight: 300;
    margin-left: 16px;
  }
`

export const Field = styled.div`
  background: rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  height: 60px;
  position: relative;
  width: 368px;

  & + & {
    margin-top: 16px;
  }
`

export const Input = styled.input`
  background-color: transparent;
  border: 0;
  color: ${props => props.theme.colors.light};
  font-size: 16px;
  font-weight: 400;
  height: 100%;
  padding: 28px 16px 8px;
  width: 100%;

  &:focus,
  &:active,
  &:focus-visible {
    background-color: transparent;
    border: 0;
    outline: 0;
  }
`

export const Label = styled.label`
  color: ${props => props.theme.colors.light};
  font-size: 12px;
  font-weight: 400;
  opacity: 0.5;

  left: 16px;
  position: absolute;
  top: 8px;
`

export const Button = styled.button`
  background-color: ${props => props.theme.colors.background};
  border: 0;
  border-radius: 44px;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
  padding: 8px 20px;

  bottom: 12px;
  position: absolute;
  right: 12px;

  &:hover {
    background-color: ${props => props.theme.colors.darken};
  }
`
