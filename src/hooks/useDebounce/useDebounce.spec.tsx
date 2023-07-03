import { renderHook, act } from '@testing-library/react'
import { useDebounce } from '.'

jest.useFakeTimers()

describe('useDebounce', () => {
  it('should debounce the value after the specified delay', () => {
    const value = 'test'
    const delay = 10000

    const { result } = renderHook(() => useDebounce<string>(value, delay))

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(result.current).toBe(value)
  })

  it('should debounce the value after default delay', () => {
    const value = 'john dow'

    const { result } = renderHook(() => useDebounce<string>(value))

    act(() => {
      jest.advanceTimersByTime(500)
    })

    expect(result.current).toBe(value)
  })
})
