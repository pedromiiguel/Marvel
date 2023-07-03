import styled, { css } from 'styled-components'

export const FooterWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    border-top: 1px solid ${theme.colors.gray_300};
    width: 100%;
  `}
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    max-width: 128rem;
    margin-inline: auto;
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.gray_50};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray_50};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
