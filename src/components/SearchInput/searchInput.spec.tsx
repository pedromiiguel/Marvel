import { SearchInput } from '.'
import userEvent from '@testing-library/user-event'
import { act, render, screen, waitFor } from '../../utils/test-utils'

jest.useFakeTimers()
describe('<SearchInput/>', () => {
  it('should render correctly', () => {
    render(<SearchInput />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    render(<SearchInput placeholder="Search" />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument()
  })

  it('should render with Search Icon', () => {
    render(<SearchInput />)

    expect(screen.getByLabelText(/Ícone de lupa/i)).toBeInTheDocument()
  })

  it('should updates search value and search params on input change', async () => {
    render(<SearchInput />)

    const inputElement = screen.getByRole('textbox')
    const text = 'iron man'

    userEvent.type(inputElement, text)

    await act(() => {
      jest.advanceTimersByTime(4000)
    })

    await waitFor(() => {
      expect(window.location.search).toBe('?search=iron+man')
      expect(inputElement).toHaveValue(text)
    })
  })
})
