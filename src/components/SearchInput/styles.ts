import styled, { css } from 'styled-components'

export const SearchInputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacings.xsmall};

    background-color: ${theme.colors.gray_50};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.red};

      svg {
        color: ${theme.colors.red};
      }
    }
  `}
`

export const SearchInput = styled.input`
  ${({ theme }) => css`
    border: 0;
    outline: none;
    background-color: inherit;
    width: 100%;
    height: 100%;

    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xxsmall};
    line-height: 1;
    color: ${theme.colors.gray_200};

    &::placeholder {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.xxsmall};
      line-height: 1;
      color: ${theme.colors.gray_200};
    }
  `}
`

export const IconContainer = styled.div`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;

    > svg {
      color: ${theme.colors.gray_200};
    }
  `}
`
