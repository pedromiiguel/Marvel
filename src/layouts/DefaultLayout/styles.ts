import styled, { css } from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1 0 auto;

    max-width: ${theme.grid.container};
    margin-inline: auto;
    margin-top: ${theme.spacings.large};

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding-inline: ${theme.grid.gutter};
  `}
`
