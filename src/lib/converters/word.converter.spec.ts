import { describe, expect } from 'vitest'
import { wordConverter } from '@theomath/source'

describe('Word converter', () => {
  it('should convert a name to numbers', () => {
    const name = 'Alisson'
    const name2 = 'Kevin'
    const result = wordConverter(name)
    const result2 = wordConverter(name2)
    expect(result).toEqual([1, 3, 9, 1, 1, 6, 5])
    expect(result2).toEqual([2, 5, 4, 9, 5])
  })
})
