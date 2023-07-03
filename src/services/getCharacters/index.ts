import { api } from '../../lib/axios'
import { generateHash } from '../../utils/generateHash'
import { Response } from '../getCharacter'

export async function getCharacters(search: string | undefined, page: number) {
  const limit = 6
  const offset = (page - 1) * limit

  const time = Number(new Date())

  const hash = generateHash(time)

  try {
    const { data } = await api.get<Response>('/characters', {
      params: {
        ts: time,
        apikey: '22246f953045df9a0cdf31a81e7945a7',
        hash,
        limit,
        offset,
        nameStartsWith: search
      }
    })
    const { data: characters } = data

    return characters
  } catch (error) {
    throw new Error('Ocorreu um problema, tente novamente mais tarde.')
  }
}
