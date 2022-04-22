import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { useContext, useEffect, useState } from 'react'
import { BooksList } from '../components/BooksList'
import { Header } from '../components/Header'
import { AuthContext } from '../contexts/auth'
import { api } from '../services/api'

import { getAPIClient } from '../services/axios'
import { Container, Content, Spinner, Wrapper } from '../styles/general'


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

type Pagination = {
  totalItems: number,
  totalPages: number;
}

type BooksProps = {
  books: Book[];
  pagination: Pagination[];
}

const Home: React.FC = (props: BooksProps) => {
  const [page, setPage] = useState(1)
  const [books, setBooks] = useState<Book[]>(props.books)
  const [loading, setLoading] = useState(false)

  const handleBooks = async (page: number) => {
    setLoading(true)
    try {
      api.get(`/books?page=${page}&amount=12`)
      .then(({ data }) => {
        setBooks(data.data)
        setLoading(false)
      })
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

  const handlePageChange = async (count: number) => {
    setPage(count)
    handleBooks(count)
  }

  return (
    <Container>
    <Content>
      <Wrapper>
        <Header />
        {loading ? (
          <Spinner />
        ) : (
          <BooksList
            books={books}
            onChangePage={handlePageChange}
            page={page}
            pagination={props.pagination}
            loading={loading}
          />
        )}
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

  const page = 1

  try {
    const { data } = await apiClient.get(`/books?page=${page}&amount=12`)

    const books = data.data.map((book: Book) => {
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

    const pagination = {
      totalItems: data.totalItems,
      totalPages: data.totalPages
    }

    return {
      props: {
        books,
        pagination
      }
    }
  } catch(error) {
    const { config } = error

    if(config.url == '/auth/refresh-token') {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }

    return {
      props: {}
    }
  }

}

export default Home
