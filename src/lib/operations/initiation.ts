import { cosmicMission } from './mission'
import { BirthStamp } from '../types'
import { soul } from './names'
import { datetimeFormatConverter } from '../converters'
import { reduction, sumAll } from '../arithmetics'

/**
 * Spiritual Initiation:
 * Sum of Cosmic Mission, Soul Number and the day of birth
 */
export const initiation = (birthStamp: BirthStamp) => {
  const cosmicMissionValue = cosmicMission(birthStamp)
  const soulNumber = soul(birthStamp)
  const partsObj = datetimeFormatConverter(birthStamp.date, birthStamp.timeZone)
  const day = parseInt(partsObj['day'], 10)
  const sumOfAll = sumAll([cosmicMissionValue.at(0), soulNumber.at(0), day])

  return reduction([sumOfAll])
}
