import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Result, getCharacter } from '../../services/getCharacter'

export function useCharacter() {
  const { slug } = useParams()

  const { data, ...rest } = useQuery({
    queryFn: () => getCharacter(slug as string),
    queryKey: ['characters', slug]
  })

  const character = data?.results[0] as Result

  return { character, ...rest }
}
