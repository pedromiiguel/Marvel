import { InputHTMLAttributes } from 'react'
import { MagnifyingGlass } from 'phosphor-react'

import { useSearchParams } from 'react-router-dom'

import * as S from './styles'

export type SearchInputProps = InputHTMLAttributes<HTMLInputElement>

export function SearchInput({ ...props }: SearchInputProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search') || ''

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    if (value.length === 0) {
      searchParams.delete('search')
      setSearchParams(searchParams, {
        replace: true
      })
    } else {
      searchParams.set('search', value)
      searchParams.set('page', String(1))

      setSearchParams(searchParams, {
        replace: true
      })
    }
  }

  return (
    <S.SearchInputContainer>
      <S.SearchInput
        type="search"
        value={search}
        onChange={handleInputChange}
        {...props}
      />
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
