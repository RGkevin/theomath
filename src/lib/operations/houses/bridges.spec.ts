import { BirthStamp, housesResidents } from '@theomath/source'
import { bridges, EvolutionBridges } from './bridges'

describe('Evolution Bridges', () => {
  it('should return the evolution bridges', () => {
    const birthStamp: BirthStamp = {
      names: ['Kevin', 'Eduardo'],
      father: {
        firstLastName: 'López',
        secondLastName: 'López',
      },
      mother: {
        firstLastName: 'Valle',
        secondLastName: 'Hernandez',
      },
      date: new Date(),
      timeZone: 'America/Guatemala',
    }
    const housesResidents1 = housesResidents(birthStamp)
    const result = bridges(housesResidents1)
    const expectedResult: EvolutionBridges = {
      1: 2,
      2: 1,
      3: 2,
      4: 1,
      5: 4,
      6: 3,
      7: 5,
      8: 4,
      9: 6,
    }
    expect(result).to.deep.equals(expectedResult)
  })
})
