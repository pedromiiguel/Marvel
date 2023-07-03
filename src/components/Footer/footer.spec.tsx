import { Footer } from '.'
import { render, screen } from '../../utils/test-utils'

describe('<Footer/>', () => {
  it('should render the footer', () => {
    render(<Footer />)

    expect(
      screen.getByText('Desenvolvido por Pedro Miguel')
    ).toBeInTheDocument()
  })
})
