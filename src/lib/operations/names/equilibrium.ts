import { BirthStamp } from '../../types'
import { charConverter } from '../../converters'
import { reduction, sumAll } from '../../arithmetics'
import { initialsFilter } from '../../filters'

/**
 * Equilibrium
 * Sum of all the values of the Full Name initials
 */
export const equilibrium = (birthStamp: BirthStamp): number[] | null => {
  const initials = initialsFilter(birthStamp)
  const initialsValues = initials.map((char) => charConverter(char))
  const sumOfInitials = sumAll(initialsValues)

  return reduction([sumOfInitials])
}
