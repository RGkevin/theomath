import { BirthStamp } from '../types';
import { charConverter } from '../converters';
import { sumAll } from './sum-all';
import { addition } from './addition';
import { initialsFilter } from '../filters';

/**
 * Equilibrium
 * Sum of all the values of the BirthStamp initials
 */
export const equilibrium = (birthStamp: BirthStamp): number[] | null => {
  const initials = initialsFilter(birthStamp);
  const initialsValues = initials.map((char) => charConverter(char));
  const sumOfInitials = sumAll(initialsValues);

  return addition([sumOfInitials]);
};
