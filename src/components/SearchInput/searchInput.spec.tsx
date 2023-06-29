import { SearchInput } from '.'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '../../utils/test-utils'

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

  it('should change its value when typing', async () => {
    const onChangeMock = jest.fn()
    render(<SearchInput onChange={onChangeMock} />)

    const inputElement = screen.getByRole('textbox')
    const text = 'This is my new text'

    userEvent.type(inputElement, text)

    await waitFor(() => {
      expect(inputElement).toHaveValue(text)
      expect(onChangeMock).toHaveBeenCalledTimes(text.length)
    })
  })
})
