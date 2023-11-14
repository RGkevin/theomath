import { describe, expect } from 'vitest'
import { BirthStamp } from '../types'
import { cosmicMission } from '@theomath/source'

describe('Get the Cosmic Mission of a Birth Stamp', () => {
  it('should get the cosmic mission values for the given birth stamp', () => {
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

    const result = cosmicMission(birthStamp)

    expect(result).to.have.all.members([2114, 8])
  })
})
