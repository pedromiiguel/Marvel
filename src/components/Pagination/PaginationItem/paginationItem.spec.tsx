import userEvent from '@testing-library/user-event'

import { PaginationItem } from '.'
import { render, screen, waitFor } from '../../../utils/test-utils'

describe('<PaginationItem/>', () => {
  it('should render the PaginationItem', () => {
    render(<PaginationItem number={1} />)

    const paginationElement = screen.getByRole('button', {
      name: /1/i
    })

    expect(paginationElement).toBeInTheDocument()
    expect(paginationElement).toHaveStyleRule('background-color', '#F3F5F6')
  })

  it("should renders correctly when it's the current page ", () => {
    render(<PaginationItem number={2} isCurrent />)

    const paginationElement = screen.getByRole('button', {
      name: /2/i
    })

    expect(paginationElement).toBeInTheDocument()
    expect(paginationElement).toHaveStyleRule('background-color', '#EC1D24')
  })

  it('should change page when pagination item is clicked', async () => {
    render(<PaginationItem number={4} />)

    const paginationElement = screen.getByRole('button', {
      name: /4/i
    })

    userEvent.click(paginationElement)

    await waitFor(() => {
      expect(window.location.search).toBe('?page=4')
    })
  })
})
