import { reduction, useFullName, wordConverter } from '@theomath/source'
import { BirthStamp } from '../../types'

export type HouseId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type HousesResidents = Record<HouseId, number>

export const housesResidents = (birthStamp: BirthStamp): HousesResidents => {
  const fullName = useFullName(birthStamp)
  const wordsValues = fullName.map(wordConverter).flat()
  const result: HousesResidents = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  }
  wordsValues.forEach((num) => {
    result[num] = reduction([(result[num] += 1)]).at(-1)
  })

  return result
}
