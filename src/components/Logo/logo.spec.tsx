import { Logo } from '.'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '../../utils/test-utils'

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

  it('should be redirected to the home when clicked', async () => {
    render(<Logo />)

    const linkElement = screen.getByRole('link')

    expect(linkElement).toHaveAttribute('href', '/')
    userEvent.click(linkElement)

    await waitFor(() => {
      expect(window.location.pathname).toBe(`/`)
    })
  })
})
