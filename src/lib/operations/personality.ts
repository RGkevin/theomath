import { BirthStamp } from '../types'
import { reduction, sumAll, sumAllConsonants } from '../arithmetics'

/**
 * Personality
 * Sum of all the consonants in the names and parents last names
 */
export const personality = ({
  names,
  father,
  mother,
}: BirthStamp): number[] => {
  const namesValues = sumAllConsonants(names)

  const fatherLastNames = father
    ? [
        father.firstLastName,
        ...(father.secondLastName ? [father.secondLastName] : []),
      ]
    : []

  const motherLastNames = mother
    ? [
        mother.firstLastName,
        ...(mother.secondLastName ? [mother.secondLastName] : []),
      ]
    : []

  namesValues.push(
    ...sumAllConsonants(fatherLastNames),
    ...sumAllConsonants(motherLastNames)
  )

  return reduction([sumAll(namesValues)])
}
