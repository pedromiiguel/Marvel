import { css, styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.box.shadow};

    overflow: hidden;
    flex: 1;

    transition: filter 0.2s ease-in-out;
    &:hover {
      filter: brightness(0.8);
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: ${theme.spacings.xxsmall};
    gap: ${theme.spacings.xxsmall};

    flex: 1;
  `}
`

export const Name = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.font.family};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray_50};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.font.family};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xxxsmall};
    color: ${theme.colors.gray_50};
  `}
`

export const StyledImage = styled.img`
  width: 100%;
  height: 30rem;
  position: relative;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`
