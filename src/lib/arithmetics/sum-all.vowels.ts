import { sumAll, vowelsFilter, wordConverter } from '@theomath/source';

/**
 * Get the vowels values from each word and then sum all values
 * @param words
 */
export const sumAllVowels = (words: string[]) =>
  words.map(vowelsFilter).map(wordConverter).map(sumAll);
