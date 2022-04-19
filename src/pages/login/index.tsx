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

export default Login
