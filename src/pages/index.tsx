import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/auth'
import { api } from '../services/api'
import { getAPIClient } from '../services/axios'

const Home: React.FC = () => {
  const { user } = useContext(AuthContext)

  useEffect(() => {
    // api.get('/books?page=1&amount=12').then(({ data }) => console.log(data))
  }, [])

  return (
    <>
      <h1>home</h1>
      <p>Bem vind{user?.gender == 'M' ? 'o' : 'a'}, {user?.name}</p>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx)

  const { ['@ioasys-books:token']: token } = parseCookies(ctx)

  if(!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  await apiClient.get('/books?page=1&amount=12').then(({ data }) => console.log(data))

  return {
    props: {}
  }
}

export default Home
