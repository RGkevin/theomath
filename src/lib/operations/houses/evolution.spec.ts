import { BirthStamp, housesResidents } from '@theomath/source'
import { evolution, EvolutionValues } from './evolution'

describe('Evolution Values', () => {
  it('should get the evolution values', () => {
    const birthStamp: BirthStamp = {
      names: ['Kevin', 'Eduardo'],
      father: {
        firstLastName: 'López',
      },
      mother: {
        firstLastName: 'Valle',
      },
      date: new Date(),
      timeZone: 'America/Guatemala',
    }
    const housesResidents1 = housesResidents(birthStamp)
    const result = evolution(housesResidents1)
    const expectedResult: EvolutionValues = {
      1: 5,
      2: 4,
      3: 4,
      4: 6,
      5: 6,
      6: 2,
      7: 1,
      8: 1,
      9: 2,
    }
    expect(result).to.deep.equals(expectedResult)
  })
})
