import { LoginBox } from '../../components/LoginBox'
import { ContentWrapper } from '../../styles/general'
import { Container } from './styles'

const Login: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <LoginBox />
      </ContentWrapper>
    </Container>
  )
}

export default Login
