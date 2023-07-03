import styled, { css } from 'styled-components'

export const Pagination = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxxsmall};
    margin-top: ${theme.spacings.medium};
  `}
`

export const Ellipsis = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray_50};
    text-align: center;
    font-size: ${theme.font.sizes.small};
  `}
`
