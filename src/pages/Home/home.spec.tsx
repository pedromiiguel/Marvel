import { Home } from '.'
import { mockCharacters } from '../../mocks/characters'
import { render, screen, waitFor } from '../../utils/test-utils'

jest.mock('../../components/Card', () => ({
  Card: function MockCard() {
    return <div data-testid="Mock Card"></div>
  }
}))

jest.mock('../../components/Pagination', () => ({
  Pagination: function MockPagination() {
    return <div data-testid="Mock Pagination"></div>
  }
}))

jest.mock('../../components/Loading', () => ({
  Loading: function MockLoading() {
    return <div data-testid="Mock Loading"></div>
  }
}))

const useCharacters = jest.spyOn(
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('../../hooks/useCharacters'),
  'useCharacters'
)
describe('<Home/>', () => {
  it('should render loading state', () => {
    useCharacters.mockReturnValueOnce({
      characters: undefined,
      isLoading: true,
      totalPages: 0,
      page: 1
    })

    render(<Home />)

    expect(screen.getByTestId('Mock Loading')).toBeInTheDocument()
  })

  it('should render text if there are no character', async () => {
    useCharacters.mockReturnValueOnce({
      characters: { results: [] },
      isLoading: false,
      totalPages: 0,
      page: 1
    })

    render(<Home />)

    await waitFor(() =>
      expect(
        screen.getByText('Não encontramos nenhum herói.')
      ).toBeInTheDocument()
    )
  })

  it('should render characters', async () => {
    useCharacters.mockReturnValueOnce({
      characters: mockCharacters.data,
      isLoading: false,
      totalPages: 2,
      page: 1
    })

    render(<Home />)

    const characterElements = screen.getAllByTestId('Mock Card')
    const paginationElements = screen.getByTestId('Mock Pagination')

    await waitFor(() => {
      expect(characterElements.length).toBe(mockCharacters.data.results.length)
      expect(paginationElements).toBeInTheDocument()
    })
  })
})
