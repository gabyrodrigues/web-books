import { useEffect } from 'react'
import { Pagination } from '../Pagination';
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

type Pagination = {
  totalItems: number,
  totalPages: number;
}

type BooksProps = {
  books: Book[];
  pagination: Pagination[];
  page: number;
  onChangePage: (count: number) => void;
  loading: boolean;
}

export function BooksList({ books, page, pagination, onChangePage, loading }: BooksProps) {
  return (
    <>
      <S.BooksList>
        {books.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </S.BooksList>

      <Pagination
        pagination={pagination}
        page={page}
        onChangePage={onChangePage}
        loading={loading}
      />
    </>
  )
}
