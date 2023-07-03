import userEvent from '@testing-library/user-event'
import { SearchInput } from '.'
import { render, screen, waitFor } from '../../utils/test-utils'

describe('<SearchInput/>', () => {
  it('should render correctly', () => {
    render(<SearchInput />)

    expect(screen.getByRole('searchbox')).toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    render(<SearchInput placeholder="Search" />)

    expect(screen.getByRole('searchbox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument()
  })

  it('should render with Search Icon', () => {
    render(<SearchInput />)

    expect(screen.getByLabelText(/Ícone de lupa/i)).toBeInTheDocument()
  })

  it('should updates search value and search params on input change', async () => {
    render(<SearchInput />)

    const inputElement = screen.getByRole('searchbox')
    const text = 'iron man'

    userEvent.type(inputElement, text)

    await waitFor(() => {
      expect(window.location.search).toBe('?search=iron+man&page=1')
      expect(inputElement).toHaveValue(text)
    })
  })
})
