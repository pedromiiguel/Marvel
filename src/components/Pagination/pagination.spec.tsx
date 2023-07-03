import { render, screen } from '../../utils/test-utils'
import { Pagination } from '.'
import { PaginationItem } from './PaginationItem'

jest.mock('./PaginationItem', () => ({
  PaginationItem: jest
    .fn()
    .mockImplementation(() => <div data-testid="pagination-item"></div>)
}))

describe('<Pagination/>', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render the pagination', () => {
    const totalCountOfRegisters = 10
    const registersPerPage = 5
    const currentPage = 1

    render(
      <Pagination
        totalCountOfRegisters={totalCountOfRegisters}
        registersPerPage={registersPerPage}
        currentPage={currentPage}
      />
    )

    expect(screen.getByRole('navigation')).toBeInTheDocument()

    expect(PaginationItem).toHaveBeenCalledTimes(2)
  })

  it('should render correctly when there are no records', () => {
    const totalCountOfRegisters = 0
    const registersPerPage = 5
    const currentPage = 1

    render(
      <Pagination
        totalCountOfRegisters={totalCountOfRegisters}
        registersPerPage={registersPerPage}
        currentPage={currentPage}
      />
    )

    expect(screen.getByRole('navigation')).toBeInTheDocument()

    expect(PaginationItem).toHaveBeenCalledTimes(1)
  })

  it('should correctly render the list of previous pages', () => {
    const totalCountOfRegisters = 1562
    const registersPerPage = 6
    const currentPage = 3

    render(
      <Pagination
        totalCountOfRegisters={totalCountOfRegisters}
        registersPerPage={registersPerPage}
        currentPage={currentPage}
      />
    )

    expect(screen.getByRole('navigation')).toBeInTheDocument()

    expect(PaginationItem).toHaveBeenCalledTimes(5)
  })

  it('should render ellipsis', () => {
    const totalCountOfRegisters = 1562
    const currentPage = 4

    render(
      <Pagination
        totalCountOfRegisters={totalCountOfRegisters}
        currentPage={currentPage}
      />
    )

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getAllByText('...')).toHaveLength(2)
    expect(PaginationItem).toHaveBeenCalledTimes(5)
  })
})
