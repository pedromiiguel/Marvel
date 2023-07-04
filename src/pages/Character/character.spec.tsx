/* eslint-disable @typescript-eslint/no-var-requires */
import { Character } from '.'
import { mockCharacter } from '../../mocks/character'
import { render, screen, waitFor } from '../../utils/test-utils'

jest.mock('../../components/Loading', () => ({
  Loading: function MockLoading() {
    return <div data-testid="Mock Loading"></div>
  }
}))

const useCharacter = jest.spyOn(
  require('../../hooks/useCharacter'),
  'useCharacter'
)
describe('<Character/>', () => {
  it('should render loading state', () => {
    useCharacter.mockReturnValueOnce({
      character: undefined,
      isLoading: true
    })

    render(<Character />)

    expect(screen.getByTestId('Mock Loading')).toBeInTheDocument()
  })

  it('should render text if there are no character', async () => {
    useCharacter.mockReturnValueOnce({
      character: undefined,
      isLoading: false
    })

    render(<Character />)

    await waitFor(() =>
      expect(
        screen.getByText('Não encontramos nenhuma informação desse herói.')
      ).toBeInTheDocument()
    )
  })

  it('should render character', async () => {
    useCharacter.mockReturnValueOnce({
      character: mockCharacter.data.results[0],
      isLoading: false
    })
    const character = mockCharacter.data.results[0]

    render(<Character />)

    expect(screen.getByText(character.description)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: character.name
      })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: character.name }))

    expect(
      screen.getByRole('heading', {
        name: /séries/i
      })
    ).toBeInTheDocument()

    expect(screen.getByText('Avengers: The Initiative (2007 - 2010)'))

    expect(
      screen.getByRole('heading', {
        name: /quadrinhos/i
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/avengers: the initiative \(2007\) #14/i))

    expect(
      screen.getByRole('heading', {
        name: /histórias/i
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/cover #19947/i))
  })
})
