import { Header } from '.'
import { render, screen } from '../../utils/test-utils'

jest.mock('../Logo', () => ({
  Logo: function MockLogo() {
    return <div data-testid="Mock Logo"></div>
  }
}))

jest.mock('../SearchInput', () => ({
  SearchInput: function MockSearchInput() {
    return <div data-testid="Mock SearchInput"></div>
  }
}))

describe('<Header/>', () => {
  it('should render the header', () => {
    render(<Header />)

    expect(screen.getByTestId(/Mock Logo/i)).toBeInTheDocument()
    expect(screen.getByTestId(/Mock SearchInput/i)).toBeInTheDocument()
  })
})
