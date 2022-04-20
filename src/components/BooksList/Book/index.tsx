import Image from 'next/image';
import { useEffect } from 'react'
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
  useEffect(() => {
    // console.log("props", props)
  }, [])

  return (
    <>
      <S.Book>
        {book.imageUrl && (
          <Image
            src={book.imageUrl}
            height={120}
            width={80}
          />
        )}

        <S.BookInfo>
          <S.BlockTitle>
            <h6>{book.title}</h6>

            {book.authors.map((author: string) => (
              <p>{author}</p>
            ))}
          </S.BlockTitle>

          <S.BlockInfo>
            <p>{book.pageCount} páginas</p>
            <p>Editora {book.publisher}</p>
            <p>Publicado em {book.published}</p>
          </S.BlockInfo>
        </S.BookInfo>
      </S.Book>
    </>
  )
}
