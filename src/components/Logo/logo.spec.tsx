import { Logo } from '.'
import { render, screen } from '../../utils/test-utils'

describe('<Logo/>', () => {
  it('should render logo with default size', () => {
    render(<Logo />)

    const logoElement = screen.getByRole('img', { name: /Marvel logo/i })

    expect(logoElement).toBeInTheDocument()
    expect(logoElement).toHaveAttribute('width', '130')
    expect(logoElement).toHaveAttribute('height', '52')
  })

  it('should render logo with custom size', () => {
    render(<Logo width={200} height={150} />)

    const logoElement = screen.getByRole('img', { name: /Marvel logo/i })

    expect(logoElement).toBeInTheDocument()
    expect(logoElement).toHaveAttribute('width', '200')
    expect(logoElement).toHaveAttribute('height', '150')
  })
})
