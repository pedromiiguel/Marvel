import { rest } from 'msw'
import { BASE_URL } from '../../src/lib/axios'
import { mockCharacters } from '../../src/mocks/characters'

export const handlers = [
  rest.get(`${BASE_URL}/characters`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({...mockCharacters})
    )
  })
]
