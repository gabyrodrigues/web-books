import Image from 'next/image'

import * as S from './styles'

import { FiX } from 'react-icons/fi'
import { ImQuotesLeft } from 'react-icons/im'

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

export function BookDetails({ book, closeDetails }) {
  function listAuthors() {
    let authors = ""

    book.authors.map((author: string, index: number) => (
      authors += index < book.authors.length - 1 ? author + ", " : author + ""
    ))

    return authors
  }

  return (
    <S.Overlay>
      <S.DetailsWrapper>
        {book.imageUrl ? (
          <Image
            src={book.imageUrl}
            alt={book.title}
            height={512}
            width={348}
          />
        ) : (
          <Image
            src={'/book-default.png'}
            alt={book.title}
            height={512}
            width={348}
          />
        )}

        <S.BookInfo>
          <S.BlockTitle>
            <h6>{book.title}</h6>

            <p>
              {listAuthors()}
            </p>
          </S.BlockTitle>

          <S.BlockInfo>
            <S.HeadingTitle>Informações</S.HeadingTitle>

            <S.InfoTitle>
              <strong>Páginas</strong>
              <strong>Editora</strong>
              <strong>Publicação</strong>
              <strong>Idioma</strong>
              <strong>Título Original</strong>
              <strong>ISBN-10</strong>
              <strong>ISBN-13</strong>
            </S.InfoTitle>

            <S.InfoValue>
              <p>{book.pageCount}</p>
              <p>{book.publisher}</p>
              <p>{book.published}</p>
              <p>{book.language}</p>
              <p>{book.title}</p>
              <p>{book.isbn10}</p>
              <p>{book.isbn13}</p>
            </S.InfoValue>
          </S.BlockInfo>

          <S.BlockInfo>
            <S.HeadingTitle>Resenha da editora</S.HeadingTitle>

            <S.BookDescription>
              <ImQuotesLeft color="#999" size="16" />
              {book.description}
            </S.BookDescription>
          </S.BlockInfo>
        </S.BookInfo>
      </S.DetailsWrapper>

      <S.CloseButton onClick={closeDetails}>
        <FiX color="#333" size="16" />
      </S.CloseButton>
    </S.Overlay>
  )
}
