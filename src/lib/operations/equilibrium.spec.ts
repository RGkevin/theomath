import { describe, expect } from 'vitest'
import { BirthStamp } from '../types'
import { equilibrium } from '@theomath/source'

describe('Get the equilibrium of a Birth Stamp', () => {
  it('should get the equilibrium value for the given birth stamp', () => {
    const birthStamp: BirthStamp = {
      names: ['Kevin', 'Eduardo'],
      father: {
        firstLastName: 'López',
      },
      mother: {
        firstLastName: 'Valle',
      },
      date: new Date(),
    }
    const result = equilibrium(birthStamp)
    expect(result).to.have.all.members([14, 5])
  })
})
