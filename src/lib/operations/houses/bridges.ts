import { HouseId, HousesResidents } from '@theomath/source'

export type EvolutionBridges = Record<HouseId, number>

export const bridges = (residents: HousesResidents): EvolutionBridges => {
  const result: EvolutionBridges = {
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
    result[houseId] = Math.abs(residents[houseId] - parseInt(houseId, 10))
  }

  return result
}
