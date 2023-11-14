import { BirthStamp } from '../types'
import { strength } from '@theomath/source'
import { expect } from 'vitest'

describe('Strength Number', () => {
  it('should get the strength number from birth stamp', () => {
    const birthStamp: BirthStamp = {
      mother: {
        firstLastName: 'Valle',
      },
      father: {
        firstLastName: 'López',
      },
      timeZone: 'America/Guatemala',
      date: new Date('1992-05-15T13:15:00.999Z'),
      names: ['Kevin', 'Eduardo'],
    }
    const result = strength(birthStamp)

    expect(result).to.have.all.members([20, 2])
  })
})
