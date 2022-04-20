import { useEffect } from 'react'
import { Book } from './Book'
import * as S from './styles'

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

export function BooksList({ books }: BooksProps) {
  useEffect(() => {
    // console.log("props", props)
  }, [])

  return (
    <>
      <S.BooksList>
        {books.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </S.BooksList>
    </>
  )
}
