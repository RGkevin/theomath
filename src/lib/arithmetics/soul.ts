import { BirthStamp } from '../types';
import { reduction } from './reduction';
import { sumAll } from './sum-all';
import { sumAllVowels } from './sum-all.vowels';

/**
 * Soul Number:
 * Sum of all the vowels values in names and last names
 */
export const soul = ({ names, father, mother }: BirthStamp) => {
  const namesValues = sumAllVowels(names);

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
    ...sumAllVowels(fatherLastNames),
    ...sumAllVowels(motherLastNames)
  );

  return reduction([sumAll(namesValues)]);
};
