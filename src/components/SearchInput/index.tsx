import { InputHTMLAttributes, useEffect } from 'react'
import { MagnifyingGlass } from 'phosphor-react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { debounce } from 'lodash'

import * as S from './styles'

export type SearchInputProps = InputHTMLAttributes<HTMLInputElement>

export function SearchInput({ ...props }: SearchInputProps) {
  const [search, setSearch] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearch(value)
    handleSearchChange(value)
  }

  const handleSearchChange = debounce((search: string) => {
    setSearchParams({ search })
  }, 500)

  useEffect(() => {
    const search = searchParams.get('search') || ''

    setSearch(search)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.SearchInputContainer>
      <S.SearchInput value={search} onChange={handleInputChange} {...props} />
      <S.IconContainer>
        <MagnifyingGlass
          size={24}
          weight="regular"
          aria-label="Ícone de lupa"
        />
      </S.IconContainer>
    </S.SearchInputContainer>
  )
}
