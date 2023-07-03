import { Loading } from '../../components/Loading'
import { Pagination } from '../../components/Pagination'
import { Card } from '../../components/Card'
import { useCharacters } from '../../hooks/useCharacters'

import * as S from './styles'

interface Character {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

export const Home = () => {
  const { characters, isLoading, totalPages, page } = useCharacters()

  if (isLoading) {
    return (
      <S.Container isLoading>
        <Loading />
      </S.Container>
    )
  }

  if (!characters?.results?.length && !isLoading) {
    return <S.Text>Não encontramos nenhum herói.</S.Text>
  }

  return (
    <div>
      <S.Container>
        {characters?.results.map((character: Character) => {
          return (
            <Card
              key={character.id}
              name={character.name}
              id={character.id}
              description={character.description}
              imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            />
          )
        })}
      </S.Container>

      <S.PaginationWrapper>
        <Pagination
          totalCountOfRegisters={totalPages}
          registersPerPage={6}
          currentPage={page}
        />
      </S.PaginationWrapper>
    </div>
  )
}
