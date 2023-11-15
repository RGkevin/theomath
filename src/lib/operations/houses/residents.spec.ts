import { BirthStamp, housesResidents, HousesResidents } from '@theomath/source'

describe('Houses Residents', () => {
  it('should return the houses residents', () => {
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
    const result = housesResidents(birthStamp)
    const expectedResult: HousesResidents = {
      1: 2,
      2: 1,
      3: 4,
      4: 4,
      5: 5,
      6: 2,
      7: 1,
      8: 1,
      9: 2,
    }
    expect(result).to.deep.equals(expectedResult)
  })

  it('should return the houses residents of full name', () => {
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
    const result = housesResidents(birthStamp)
    const expectedResult: HousesResidents = {
      1: 3,
      2: 1,
      3: 5,
      4: 5,
      5: 1,
      6: 3,
      7: 2,
      8: 4,
      9: 3,
    }

    expect(result).to.deep.equals(expectedResult)
  })
})
