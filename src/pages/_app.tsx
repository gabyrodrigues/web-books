import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import { MainContainer } from '../styles/general'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>ioasys Books</title>
      </Head>
      <ThemeProvider theme={theme}>
        <MainContainer>
          <Component {...pageProps} />

          <GlobalStyle />
        </MainContainer>
      </ThemeProvider>
    </>
  )
}

export default MyApp
