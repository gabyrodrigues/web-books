import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '../contexts/auth'
import { MainContainer } from '../styles/general'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Head>
        <title>ioasys Books</title>
      </Head>
      <ThemeProvider theme={theme}>
        <MainContainer>
          <Component {...pageProps} />

          <GlobalStyle />
        </MainContainer>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
