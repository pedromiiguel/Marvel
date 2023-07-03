import { useSearchParams } from 'react-router-dom'
import * as S from './styles'

interface PaginationItemProps {
  number: number
  isCurrent?: boolean
}
export function PaginationItem({
  number,
  isCurrent = false
}: PaginationItemProps) {
  const [searchParams, setSearchParams] = useSearchParams()

  const handlePageChange = (page: number) => {
    searchParams.set('page', String(page))
    setSearchParams(searchParams, {
      replace: true
    })
  }

  if (isCurrent) {
    return <S.Button current={isCurrent}>{number}</S.Button>
  }

  return (
    <S.Button current={isCurrent} onClick={() => handlePageChange(number)}>
      {number}
    </S.Button>
  )
}
