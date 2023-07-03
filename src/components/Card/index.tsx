import { ROUTES } from '../../constants/routes'
import * as S from './styles'

interface CardProps {
  id: number
  name: string
  description: string
  imageUrl: string
}

export function Card({ id, name, description, imageUrl }: CardProps) {
  return (
    <S.Container to={`${ROUTES.CHARACTER}/${id}`}>
      <S.StyledImage src={imageUrl} alt={name} />
      <S.Content>
        <S.Name>{name}</S.Name>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Container>
  )
}
