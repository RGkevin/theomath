import { BirthStamp } from '../types'
import { charConverter } from '../converters'
import { sumAll } from '../arithmetics/sum-all'
import { reduction } from '../arithmetics/reduction'
import { initialsFilter } from '../filters'

/**
 * Equilibrium
 * Sum of all the values of the BirthStamp initials
 */
export const equilibrium = (birthStamp: BirthStamp): number[] | null => {
  const initials = initialsFilter(birthStamp)
  const initialsValues = initials.map((char) => charConverter(char))
  const sumOfInitials = sumAll(initialsValues)

  return reduction([sumOfInitials])
}
