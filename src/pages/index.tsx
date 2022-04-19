import { useContext } from "react"
import { AuthContext } from "../contexts/auth"

const Home: React.FC = () => {
  const { user } = useContext(AuthContext)

  return (
    <>
      <h1>home</h1>
      <p>Bem vind{user?.gender == 'M' ? 'o' : 'a'}, {user?.name}</p>
    </>
  )
}

export default Home
