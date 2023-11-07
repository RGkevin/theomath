import base9Dic from '../dictionaries/base9.dictionary.json';
import { addition } from '../arithmetics';

export const lettersConverter = (letters: string): number => {
  const words = letters.split(' ');
  const wordsValues = words.map(wordConverter).map(sumAll);
  const wordsValuesSum = sumAll(wordsValues);
  const lastSum = addition([wordsValuesSum]).at(-1);
  console.info(
    `[lettersConverter] letters: "${letters}" wordsValues: [${wordsValues}] lettersValue: ${lastSum}`
  );
  return lastSum;
};

export const sumAll = (nums: number[]) =>
  nums.reduce((prev: number, curr: number) => prev + curr, 0);

export const wordConverter = (word: string): number[] => {
  const result: number[] = [];

  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i);
    result.push(charConverter(char));
  }

  return result;
};

export const charConverter = (char: string, mod = base9Dic.digits): number => {
  const sanitizedChar = char
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  const foundIdx = base9Dic.letters.indexOf(sanitizedChar);
  if (foundIdx === -1) {
    throw new Error(
      `[charConverter] could not find char: "${char}" in base9Dictionary`
    );
  }

  const modularValue = (foundIdx + 1) % mod;
  return modularValue === 0 ? 9 : modularValue;
};
