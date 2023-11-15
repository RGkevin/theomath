import { describe, expect } from 'vitest'
import { BirthStamp } from '../../types'
import { lifePath } from '@theomath/source'

describe('Get the Life Path of a Birth Stamp', () => {
  it('should get the LifePath values for the given birth stamp', () => {
    const birthStamp: BirthStamp = {
      names: ['Kevin', 'Eduardo'],
      father: {
        firstLastName: 'López',
      },
      mother: {
        firstLastName: 'Valle',
      },
      date: new Date('1992-05-16T05:15:00.999Z'),
      timeZone: 'America/Guatemala',
    }

    const result = lifePath(birthStamp)

    expect(result).to.have.all.members([2012, 5])
  })
})
