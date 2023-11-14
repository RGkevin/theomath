import { BirthStamp } from '../types'
import { reduction } from '../arithmetics/reduction'
import { sumAll } from '../arithmetics/sum-all'
import { sumAllVowels } from '../arithmetics/sum-all.vowels'

/**
 * Soul Number:
 * Sum of all the vowels values in names and last names
 */
export const soul = ({ names, father, mother }: BirthStamp) => {
  const namesValues = sumAllVowels(names)

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
    ...sumAllVowels(fatherLastNames),
    ...sumAllVowels(motherLastNames)
  )

  return reduction([sumAll(namesValues)])
}
