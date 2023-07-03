import { styled, keyframes, css } from 'styled-components'

const SpinnerAnimation = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  ${({ theme }) => css`
    border: 4px solid ${theme.colors.white};
    border-top: 4px solid ${theme.colors.red};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${SpinnerAnimation} 1s linear infinite;
    margin: 0 auto;
    flex: 1;
  `}
`
