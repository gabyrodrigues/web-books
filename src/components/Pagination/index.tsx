import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import * as S from './styles'

type Pagination = {
  totalItems: number,
  totalPages: number;
}

export function Pagination({ page, pagination, onChangePage, loading }) {
  const lastPage = Math.ceil(pagination.totalPages)

  return (
    <>
      <S.PaginationWrapper>
        <p>
          Página <strong>{page}</strong> de <strong>{lastPage}</strong>
        </p>

        <S.PaginateButton
          onClick={() => onChangePage(page - 1)}
          disabled={page <= 1 || loading}
        >
          <FiChevronLeft />
        </S.PaginateButton>
        <S.PaginateButton
          onClick={() => onChangePage(page + 1)}
          disabled={page >= pagination.lastPage || loading}
        >
          <FiChevronRight />
        </S.PaginateButton>
      </S.PaginationWrapper>
    </>
  )
}
