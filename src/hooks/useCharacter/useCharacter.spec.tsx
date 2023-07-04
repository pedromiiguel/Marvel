import '../../../.jest/server.mock'

import { AllTheProviders, renderHook, waitFor } from '../../utils/test-utils'
import { useCharacter } from '.'
import { mockCharacter } from '../../mocks/character'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ slug: 123123 })
}))

describe('useCharacters', () => {
  it('should return the character data', async () => {
    const { result } = renderHook(() => useCharacter(), {
      wrapper: AllTheProviders
    })

    expect(result.current.isLoading).toEqual(true)
    expect(result.current.character).toBeUndefined()

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.isLoading).toEqual(false)
    expect(result.current.character).toEqual(mockCharacter.data.results[0])
  })
})
