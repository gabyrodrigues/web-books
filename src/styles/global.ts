import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --webkit-font-smoothing: antialised;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Heebo, sans-serif;
  }

  a {
    color: ${props => props.theme.colors.background};
    text-decoration: none;
  }
`
