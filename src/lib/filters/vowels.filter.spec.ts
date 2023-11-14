import { vowelsFilter } from './vowels.filter'
import { expect } from 'vitest'

describe('Vowels filter', () => {
  it('should filter out the consonants', () => {
    const letters = 'LópEz'
    const result = vowelsFilter(letters)
    expect(result).eq('oE')
  })
  it('should filter out the consonants for a word without vowels', () => {
    const letters = 'LpZ'
    const result = vowelsFilter(letters)
    expect(result).eq('')
  })
})
