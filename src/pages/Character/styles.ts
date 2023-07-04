import styled, { css } from 'styled-components'
import media from 'styled-media-query'

interface ContainerProps {
  isLoading?: boolean
}

export const Container = styled.main<ContainerProps>`
  ${({ theme, isLoading = false }) => css`
    display: grid;
    grid-template-columns: max-content 1fr;

    gap: ${theme.spacings.medium};
    flex: 1;

    ${isLoading &&
    css`
      grid-template-columns: 1fr;
      place-content: center;
    `}

    ${media.lessThan('large')`
      grid-template-columns: 1fr;
    `}
  `}
`

export const SectionImage = styled.section`
  max-height: 70rem;
  aspect-ratio: 16/9;

  ${media.greaterThan('large')`
  aspect-ratio: 9/16;
  `}
`

export const SectionContent = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const Thumbnail = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${theme.border.radius};
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    margin-block: ${theme.spacings.xsmall};
  `}
`

export const ListWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.medium};

    ${media.lessThan('large')`
    grid-template-columns: repeat(1, 1fr);
  `}

    h2 {
      font-size: ${theme.font.sizes.small};
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const List = styled.ul`
  ${({ theme }) => css`
    padding-left: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray_50};
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
  `}
`
