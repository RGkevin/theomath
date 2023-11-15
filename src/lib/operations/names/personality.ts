import { BirthStamp } from '../../types'
import { reduction, sumAll, sumAllConsonants } from '../../arithmetics'
import { useFullName } from '../../utils'

/**
 * Personality
 * Sum of all the consonants in the names and parents last names
 */
export const personality = (birthStamp: BirthStamp): number[] => {
  const fullName = useFullName(birthStamp)
  const namesValues = sumAllConsonants(fullName)

  return reduction([sumAll(namesValues)])
}
