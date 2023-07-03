import { DefaultLayout } from '.'
import { render, screen } from '../../utils/test-utils'

jest.mock('../../components/Header', () => ({
  Header: function MockHeader() {
    return <div data-testid="Mock Header"></div>
  }
}))

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')
  const mockOutlet = () => <div data-testid="Mock Outlet"></div>
  return {
    ...originalModule,
    Outlet: mockOutlet
  }
})

jest.mock('../../components/Footer', () => ({
  Footer: function MockFooter() {
    return <div data-testid="Mock Footer"></div>
  }
}))

describe('<DefaultLayout/>', () => {
  it('should render default layout', () => {
    render(<DefaultLayout />)

    expect(screen.getByTestId('Mock Header')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Outlet')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
  })
})
