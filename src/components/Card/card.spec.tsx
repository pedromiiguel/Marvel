import { Card } from '.'
import { render, screen, waitFor } from '../../utils/test-utils'
import userEvent from '@testing-library/user-event'

const mockCard = {
  id: 10,
  name: 'Nome do personagem',
  description: 'Descrição do personagem',
  imageUrl: 'url-da-imagem.jpg'
}
describe('<Card/>', () => {
  it('should render the card', () => {
    render(<Card {...mockCard} />)

    const nameElement = screen.getByText(mockCard.name)
    const descriptionElement = screen.getByText(mockCard.description)
    const imageElement = screen.getByAltText(mockCard.name)

    expect(nameElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
    expect(imageElement).toBeInTheDocument()
  })
  it('should be redirected to the correct route when clicked', async () => {
    render(<Card {...mockCard} />)

    const linkElement = screen.getByRole('link')

    expect(linkElement).toHaveAttribute('href', `/character/${mockCard.id}`)
    userEvent.click(linkElement)

    await waitFor(() => {
      expect(window.location.pathname).toBe(`/character/${mockCard.id}`)
    })
  })
})
