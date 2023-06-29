import { Logo } from '../Logo'
import { SearchInput } from '../SearchInput'

import * as S from './styles'

export function Header() {
  return (
    <S.Header>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>

      <SearchInput placeholder="Procurando algum herói específico?" />
    </S.Header>
  )
}
