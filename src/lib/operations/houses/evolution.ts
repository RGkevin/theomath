import { HouseId, HousesResidents } from '@theomath/source'

export type EvolutionValues = Record<HouseId, number>

export type HousesAppearances = Record<HouseId, number>

export const evolution = (residents: HousesResidents): EvolutionValues => {
  const result: EvolutionValues = {
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
  const housesAppearances = houseIdAppearancesInResidents(residents)

  for (const houseId in residents) {
    const resident = residents[houseId]
    result[houseId] = resident + housesAppearances[houseId]
  }

  return result
}

export const houseIdAppearancesInResidents = (
  residents: HousesResidents
): HousesAppearances => {
  const result: HousesAppearances = {
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

  for (const houseId in residents) {
    const resident = residents[houseId]
    result[resident] += 1
  }

  return result
}
