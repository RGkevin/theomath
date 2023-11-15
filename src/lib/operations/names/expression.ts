import { BirthStamp } from '../../types'
import { lettersConverter } from '../../converters'

/**
 * Expression
 * Sum of all the vowels and consonants of the Birth Stamp
 */
export const expression = ({ names, father, mother }: BirthStamp): number[] => {
  let fullName = names.join(' ')
  if (father) {
    fullName += ` ${father.firstLastName}`
  }
  if (mother) {
    fullName += ` ${mother.firstLastName}`
  }

  return lettersConverter(fullName)
}
