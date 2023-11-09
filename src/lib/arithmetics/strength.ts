import { BirthStamp } from '../types';
import { datetimeFormatConverter } from '../converters';
import { addition } from './addition';

/**
 * Strength Number:
 * Sum of Day and Month of birth
 */
export const strength = (birthStamp: BirthStamp) => {
  const datePartsObj = datetimeFormatConverter(
    birthStamp.date,
    birthStamp.timeZone
  );
  const [day, month] = [
    Number.parseInt(datePartsObj['day'], 10),
    Number.parseInt(datePartsObj['month'], 10),
  ];

  return addition([day + month]);
};
