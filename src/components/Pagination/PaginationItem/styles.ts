import styled, { css } from 'styled-components'
interface ButtonProps {
  current: boolean
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, current = false }) => css`
    height: 3.2rem;
    padding-inline: calc(${theme.spacings.small} / 2);
    background-color: ${theme.colors.gray_50};
    border-radius: calc(${theme.border.radius} / 2);
    border: none;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray_800};

    ${!current &&
    css`
      &:hover {
        filter: brightness(0.8);
      }
    `}

    ${current &&
    css`
      background-color: ${theme.colors.red};
    `};
  `}
`
