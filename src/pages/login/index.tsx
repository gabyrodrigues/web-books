import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { LoginBox } from '../../components/LoginBox'
import { Content } from '../../styles/general'
import { Container, Wrapper } from './styles'

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <Wrapper>
          <LoginBox />
        </Wrapper>
      </Content>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['@ioasys-books:token']: token } = parseCookies(ctx)

  if(token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default Login
