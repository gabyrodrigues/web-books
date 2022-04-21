import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { useContext, useEffect } from 'react'
import { BooksList } from '../components/BooksList'
import { Header } from '../components/Header'
import { AuthContext } from '../contexts/auth'

import { getAPIClient } from '../services/axios'
import { Container, Content, Wrapper } from '../styles/general'


type Book = {
  id: string;
  authors: string[];
  title: string;
  description: string;
  pageCount: number;
  category: string;
  imageUrl: string;
  language: string;
  isbn10: string;
  isbn13: string;
  publisher: string;
  published: number;
}

type BooksProps = {
  books: Book[];
}

const Home: React.FC = ({ books }: BooksProps) => {
  // useEffect(() => {
  //   async function listBooks() {
  //     await api.get('/books?page=1&amount=12')
  //     .then(({ data }) => {
  //       // console.log(data.data)

  //       setBooks(data.data)
  //     }).catch(({ error }) => {
  //       console.log(error)
  //     })
  //   }

  //   listBooks()
  // }, [])

  return (
    <Container>
    <Content>
      <Wrapper>
        <Header />
        <BooksList books={books} />
      </Wrapper>
    </Content>
  </Container>
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

  const { data } = await apiClient.get('/books?page=1&amount=12')

  const books = data.data.map(book => {
    return {
      id: book.title,
      authors: book.authors,
      title: book.title,
      description: book.description,
      pageCount: Number(book.pageCount),
      category: book.category,
      imageUrl: book.imageUrl,
      language: book.language,
      isbn10: book.isbn10,
      isbn13: book.isbn13,
      publisher: book.publisher,
      published: Number(book.published)
    }
  })

  return {
    props: {
      books
    }
  }
}

export default Home
