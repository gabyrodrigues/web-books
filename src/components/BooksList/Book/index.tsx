import Image from 'next/image'
import { useState } from 'react'
import { BookDetails } from '../../BookDetails';
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

export function Book({ book }) {
  const [isBookDetailsOpen, setIsBookDetailsOpen] = useState<boolean>(false);

  return (
    <>
      <S.Book onClick={() => setIsBookDetailsOpen(true)}>
        {book.imageUrl ? (
          <Image
            src={book.imageUrl}
            priority
            height={120}
            width={80}
          />
        ) : (
          <Image
            src={'/book-default.png'}
            height={120}
            width={80}
          />
        )}

        <S.BookInfo>
          <S.BlockTitle>
            <h6>{book.title}</h6>

            {book.authors.map((author: string, index: number) => (
              <p key={index}>{author}</p>
            ))}
          </S.BlockTitle>

          <S.BlockInfo>
            <p>{book.pageCount} páginas</p>
            <p>Editora {book.publisher}</p>
            <p>Publicado em {book.published}</p>
          </S.BlockInfo>
        </S.BookInfo>
      </S.Book>

      {isBookDetailsOpen && <BookDetails book={book} closeDetails={() => setIsBookDetailsOpen(false)} />}
    </>
  )
}
