import { useSearchParams } from 'react-router-dom'
import { useDebounce } from '../useDebounce'
import { useQuery } from '@tanstack/react-query'
import { getCharacters } from '../../services/getCharacters'

export function useCharacters() {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search') || undefined
  const page = Number(searchParams.get('page')) || 1

  const debouncedSearch = useDebounce<string | undefined>(search, 1000)

  const characters = useQuery({
    queryFn: () => getCharacters(debouncedSearch, page),
    queryKey: ['characters', debouncedSearch, page]
  })

  return {
    characters: characters?.data,
    totalPages: characters?.data?.total,
    page,
    ...characters
  }
}
