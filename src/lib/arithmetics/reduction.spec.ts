import { expect } from 'chai'
import { reduction } from './reduction'

describe('Theosophical arithmetic', () => {
  it('should get theosophical additions for given number', () => {
    const num = 56
    const sums = reduction([num])
    expect(sums).to.have.all.members([56, 11, 2])
  })

  it('should get theosophical additions for given number until special', () => {
    const num = 56
    const sums = reduction([num], true)
    expect(sums).to.have.all.members([56, 11])
  })
})
