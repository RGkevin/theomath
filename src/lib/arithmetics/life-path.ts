import { BirthStamp } from '../types';
import { addition } from './addition';
import { sumAll } from './sum-all';

/**
 * Life Path
 * The sums of all the digits in the Birth Stamp date
 * It uses the timezone of the date
 */
export const lifePath = ({ date, timeZone }: BirthStamp): number[] => {
  const formattedPart = new Intl.DateTimeFormat([], {
    timeZone,
  }).formatToParts(date);
  const partsValues = formattedPart.reduce((prev, curr) => {
    return { ...prev, [curr.type]: curr.value };
  }, {});

  const day = parseInt(partsValues['day'], 10);
  const month = parseInt(partsValues['month'], 10);
  const year = parseInt(partsValues['year'], 10);
  const sumOfAll = sumAll([day, month, year]);

  return addition([sumOfAll]);
};
