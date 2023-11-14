import base9Dic from '../dictionaries/base9.dictionary.json'
import { clean } from '../utils'

/**
 * Convert a Char string to a numeric value
 * based on the Base 9 Dictionary
 * @param char
 * @param base
 * @Return { number | null }
 */
export const charConverter = (
  char: string,
  base = base9Dic.digits
): number | null => {
  const cleanedChart = clean(char.toLowerCase())

  const foundIdx = base9Dic.letters.indexOf(cleanedChart)
  if (foundIdx === -1) {
    return null
  }

  const modularValue = (foundIdx + 1) % base

  return !modularValue ? base : modularValue
}
