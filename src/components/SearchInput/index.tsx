import { InputHTMLAttributes } from 'react'
import { MagnifyingGlass } from 'phosphor-react'

import * as S from './styles'

export type SearchInputProps = InputHTMLAttributes<HTMLInputElement>

export function SearchInput({ ...props }: SearchInputProps) {
  return (
    <S.SearchInputContainer>
      <S.SearchInput {...props} />
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
