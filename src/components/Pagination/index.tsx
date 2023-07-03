import { PaginationItem } from './PaginationItem'

import * as S from './styles'

interface PaginationProps {
  totalCountOfRegisters?: number
  registersPerPage?: number
  currentPage?: number
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter((page) => page > 0)
}

export function Pagination({
  totalCountOfRegisters = 10,
  registersPerPage = 6,
  currentPage = 1
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : []

  return (
    <S.Pagination role="navigation" aria-label="Navegação de Paginação">
      {currentPage > 1 + siblingsCount && (
        <>
          <PaginationItem number={1} />
          {currentPage > 2 + siblingsCount && <S.Ellipsis>...</S.Ellipsis>}
        </>
      )}

      {previousPages.length > 0 &&
        previousPages.map((page) => {
          return <PaginationItem number={page} key={page} />
        })}

      <PaginationItem number={currentPage} isCurrent />

      {nextPages.length > 0 &&
        nextPages.map((page) => {
          return <PaginationItem number={page} key={page} />
        })}

      {currentPage + siblingsCount < lastPage && (
        <>
          {currentPage + 1 + siblingsCount < lastPage && (
            <S.Ellipsis>...</S.Ellipsis>
          )}

          <PaginationItem number={lastPage} />
        </>
      )}
    </S.Pagination>
  )
}
