import { BirthStamp } from '../types';
import { sumAllConsonants } from './sum-all.consonants';
import { addition } from './addition';
import { sumAll } from './sum-all';

/**
 * Personality
 * Sum of all the consonants in the names and parents last names
 */
export const personality = ({
  names,
  father,
  mother,
}: BirthStamp): number[] => {
  const namesValues = sumAllConsonants(names);

  const fatherLastNames = father
    ? [
        father.firstLastName,
        ...(father.secondLastName ? [father.secondLastName] : []),
      ]
    : [];

  const motherLastNames = mother
    ? [
        mother.firstLastName,
        ...(mother.secondLastName ? [mother.secondLastName] : []),
      ]
    : [];

  namesValues.push(
    ...sumAllConsonants(fatherLastNames),
    ...sumAllConsonants(motherLastNames)
  );

  return addition([sumAll(namesValues)]);
};
