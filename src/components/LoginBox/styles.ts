import styled from 'styled-components'

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 368px;
  position: relative;
  width: 100%;
`

export const LoginHeader = styled.div`
  display: flex;
  margin-bottom: ${props => props.theme.spacing.huge};

  p {
    color: ${props => props.theme.colors.light};
    font-size: ${props => props.theme.fonts.huge};
    font-weight: 300;
    margin-left: ${props => props.theme.spacing.medium};
  }
`

export const Field = styled.div`
  background: rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  height: 60px;
  position: relative;
  max-width: 368px;
  width: 100%;

  & + & {
    margin-top: ${props => props.theme.spacing.medium};
  }
`

export const Input = styled.input`
  background-color: transparent;
  border: 0;
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fonts.big};
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
  font-size: ${props => props.theme.fonts.small};
  font-weight: 400;
  opacity: 0.5;

  left: ${props => props.theme.spacing.medium};
  position: absolute;
  top: ${props => props.theme.spacing.small};
`

export const Button = styled.button`
  background-color: ${props => props.theme.colors.background};
  border: 0;
  border-radius: 44px;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  font-size: ${props => props.theme.fonts.big};
  font-weight: 600;
  line-height: 1.3;
  padding: 8px 20px;

  bottom: 12px;
  position: absolute;
  right: 12px;

  &:hover {
    filter: brightness(0.9);
  }
`

export const LoginWarning = styled.div`
  background-color: ${props => props.theme.colors.lighten};
  border-radius: 4px;
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fonts.big};
  font-weight: 700;
  line-height: 1;
  margin-top: ${props => props.theme.spacing.big};
  padding: ${props => props.theme.spacing.medium};
  position: relative;

  &:after {
    content: "";

    border-color: transparent transparent ${props => props.theme.colors.lighten} transparent;
    border-style: solid;
    border-width: 8px;

    bottom: 100%;
    left: ${props => props.theme.spacing.medium};
    position: absolute;
  }
`
