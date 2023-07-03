import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.header`
  ${({ theme }) => css`
    max-width: 128rem;
    margin-inline: auto;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;

    padding: ${theme.spacings.xsmall};

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
      gap:${theme.spacings.xsmall};
    `}
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')` 
      justify-self: center;
  `}
`
