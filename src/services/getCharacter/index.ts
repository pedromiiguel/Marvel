import { api } from '../../lib/axios'
import { generateHash } from '../../utils/generateHash'

export interface Response {
  data: Data
}

interface Data {
  offset: number
  limit: number
  total: number
  count: number
  results: Result[]
}

export interface Result {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: Thumbnail
  resourceURI: string
  comics: Comics
  series: Comics
  stories: Stories
  events: Comics
  urls: URL[]
}

interface Comics {
  available: number
  collectionURI: string
  items: ComicsItem[]
  returned: number
}

interface ComicsItem {
  resourceURI: string
  name: string
}

interface Stories {
  available: number
  collectionURI: string
  items: StoriesItem[]
  returned: number
}

interface StoriesItem {
  resourceURI: string
  name: string
  type: string
}

interface Thumbnail {
  path: string
  extension: string
}

interface URL {
  type: string
  url: string
}

export async function getCharacter(characterId: string) {
  const time = Number(new Date())

  const hash = generateHash(time)

  try {
    const { data } = await api.get<Response>(`/characters/${characterId}`, {
      params: {
        ts: time,
        apikey: '22246f953045df9a0cdf31a81e7945a7',
        hash
      }
    })
    const { data: character } = data

    return character
  } catch (error) {
    throw new Error('Ocorreu um problema, tente novamente mais tarde.')
  }
}
