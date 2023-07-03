import { Loading } from '.'
import { render, screen } from '../../utils/test-utils'

describe('<Loading/>', () => {
  it('should render the Loading', () => {
    render(<Loading />)

    const loadingElement = screen.getByLabelText(/Carregando/i)

    expect(loadingElement).toBeInTheDocument()
  })
})
