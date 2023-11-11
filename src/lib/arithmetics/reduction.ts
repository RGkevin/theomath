import { specials } from '../dictionaries/base9.dictionary.json';

export const reduction = (sums: number[], checkSpecial = false): number[] => {
  const lastSum = sums.at(-1);
  if (checkSpecial && specials.includes(lastSum)) {
    // found special
    return sums;
  }

  const asString = lastSum.toString();
  if (asString.length < 2) {
    return sums;
  }

  const sum = [...asString]
    .map((numAsString) => Number.parseInt(numAsString, 10))
    .reduce((prev, curr) => prev + curr, 0);

  return reduction([...sums, sum], checkSpecial);
};
