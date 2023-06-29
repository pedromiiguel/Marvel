import { styled, css } from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.header`
  ${({ theme }) => css`
    max-width: 1280px;
    margin-inline: auto;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;

    padding: ${theme.spacings.xsmall};

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;

      flex: 1;
      gap: 16px;
    `}
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')` 
      justify-self: center;
  `}
`
