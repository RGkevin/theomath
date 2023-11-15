import { HouseId, HousesResidents } from '@theomath/source'

export type EvolutionNuances = Record<HouseId, [number, number, number] | []>

export const evolutionNuances = (
  residents: HousesResidents
): EvolutionNuances => {
  const nuances: EvolutionNuances = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  }
  for (const houseId in nuances) {
    const primaryHouseReference = residents[houseId]
    const residentOfPrimaryHouseRef = residents[primaryHouseReference]
    nuances[houseId].push(residentOfPrimaryHouseRef)

    const secondaryResident = residents[residentOfPrimaryHouseRef]
    nuances[houseId].push(secondaryResident)

    const tertiaryResident = residents[secondaryResident]
    nuances[houseId].push(tertiaryResident)
  }

  return nuances
}
