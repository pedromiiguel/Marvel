import { css } from 'styled-components'
import { styled } from 'styled-components'

export const Footer = styled.footer`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding: ${theme.spacings.small};
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.gray_50};

    font-size: ${theme.font.sizes.xsmall};
    border-top: 1px solid ${theme.colors.gray_300};
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray_50};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
