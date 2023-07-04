import { Loading } from '../../components/Loading'
import { useCharacter } from '../../hooks/useCharacter'

import * as S from './styles'

export function Character() {
  const { character, isLoading } = useCharacter()

  if (isLoading) {
    return (
      <S.Container isLoading>
        <Loading />
      </S.Container>
    )
  }

  if (!character && !isLoading) {
    return <S.Text>Não encontramos nenhuma informação desse herói.</S.Text>
  }

  return (
    <S.Container>
      <S.SectionImage>
        <S.Thumbnail
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
      </S.SectionImage>
      <S.SectionContent>
        <S.Title>{character.name}</S.Title>
        <S.Description>{character.description}</S.Description>
        <S.ListWrapper>
          <div>
            <S.Subtitle>Séries</S.Subtitle>
            <S.List>
              {character?.series?.items.map((serie) => (
                <li key={serie.name}>{serie.name}</li>
              ))}
            </S.List>
          </div>

          <div>
            <S.List>
              <S.Subtitle>Quadrinhos</S.Subtitle>
              {character?.comics?.items.map((comic) => (
                <li key={comic.name}>{comic.name}</li>
              ))}
            </S.List>
          </div>
          <div>
            <S.Subtitle>Histórias</S.Subtitle>
            <S.List>
              {character?.stories?.items.map((story) => (
                <li key={story.name}>{story.name}</li>
              ))}
            </S.List>
          </div>
        </S.ListWrapper>
      </S.SectionContent>
    </S.Container>
  )
}
