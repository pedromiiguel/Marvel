import { useLocation } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import { Logo } from '../Logo'
import { SearchInput } from '../SearchInput'

import * as S from './styles'

export function Header() {
  const { pathname } = useLocation()

  const showSearchInput = pathname === ROUTES.HOME

  return (
    <S.Header>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>

      {showSearchInput && (
        <SearchInput placeholder="Procurando algum herói específico?" />
      )}
    </S.Header>
  )
}
