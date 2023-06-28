import { css, styled } from 'styled-components'

const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.red};
  `}
`

export const Home = () => {
  return <Title>Home</Title>
}
