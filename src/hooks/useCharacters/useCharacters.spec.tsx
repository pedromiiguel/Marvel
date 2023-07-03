import '../../../.jest/server.mock'

import { AllTheProviders, renderHook, waitFor } from '../../utils/test-utils'
import { useCharacters } from '.'
import { mockCharacters } from '../../mocks/characters'

describe('useCharacters', () => {
  it('should return the characters data', async () => {
    const { result } = renderHook(() => useCharacters(), {
      wrapper: AllTheProviders
    })

    expect(result.current.isLoading).toEqual(true)

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.page).toBe(1)
    expect(result.current.isLoading).toEqual(false)
    expect(result.current.characters).toEqual(mockCharacters.data)
  })
})
