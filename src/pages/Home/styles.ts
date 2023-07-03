import styled, { css } from 'styled-components'
import media from 'styled-media-query'

interface ContainerProps {
  isLoading?: boolean
}

export const Container = styled.main<ContainerProps>`
  ${({ theme, isLoading = false }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    flex: 1;
    gap: ${theme.spacings.small};

    ${isLoading &&
    css`
      grid-template-columns: repeat(1, 1fr);
      place-content: center;
    `}

    ${!isLoading &&
    css`
      ${media.greaterThan('large')`
      grid-template-columns: repeat(3, 1fr);
    `}
    `}
  `}
`

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray_50};
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
  `}
`
