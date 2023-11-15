import { EvolutionNuances, evolutionNuances } from './nuances'
import { BirthStamp, housesResidents } from '@theomath/source'

describe('', () => {
  it('should get the evolution nuances', () => {
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
    const result = evolutionNuances(housesResidents1)

    const expectedResult: EvolutionNuances = {
      1: [1, 2, 1],
      2: [2, 1, 2],
      3: [4, 4, 4],
      4: [4, 4, 4],
      5: [5, 5, 5],
      6: [1, 2, 1],
      7: [2, 1, 2],
      8: [2, 1, 2],
      9: [1, 2, 1],
    }

    expect(result).to.deep.equals(expectedResult)
  })

  it('should get the evolution nuances for full name', () => {
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
    const result = evolutionNuances(housesResidents1)

    const expectedResult: EvolutionNuances = {
      1: [5, 1, 3],
      2: [3, 5, 1],
      3: [1, 3, 5],
      4: [1, 3, 5],
      5: [3, 5, 1],
      6: [5, 1, 3],
      7: [1, 3, 5],
      8: [5, 1, 3],
      9: [5, 1, 3],
    }

    expect(result).to.deep.equals(expectedResult)
  })
})
