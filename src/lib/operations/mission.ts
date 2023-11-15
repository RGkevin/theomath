import { BirthStamp } from '../types'
import { lifePath } from './birthdate'
import { expression } from './names'
import { reduction } from '../arithmetics'

/**
 * Cosmic Mission:
 * Sum of Life Path value and Expression value
 */
export const cosmicMission = (birthStamp: BirthStamp) => {
  const lifePathValue = lifePath(birthStamp)
  const expressionValue = expression(birthStamp)
  const sumOfBoth = lifePathValue.at(0) + expressionValue.at(0)

  return reduction([sumOfBoth])
}
