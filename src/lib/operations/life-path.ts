import { BirthStamp } from '../types'
import { reduction, sumAll } from '../arithmetics'
import { datetimeFormatConverter } from '../converters'

/**
 * Life Path
 * The sums of all the digits in the Birth Stamp date
 * It uses the timezone of the date
 */
export const lifePath = ({ date, timeZone }: BirthStamp): number[] => {
  const partsObj = datetimeFormatConverter(date, timeZone)

  const day = parseInt(partsObj['day'], 10)
  const month = parseInt(partsObj['month'], 10)
  const year = parseInt(partsObj['year'], 10)
  const sumOfAll = sumAll([day, month, year])

  return reduction([sumOfAll])
}
