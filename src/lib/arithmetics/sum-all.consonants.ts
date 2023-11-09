import { consonantsFilter, sumAll, wordConverter } from '@theomath/source';

/**
 * Get the consonants values from each word and then sum all values
 * @param words
 */
export const sumAllConsonants = (words: string[]) =>
  words.map(consonantsFilter).map(wordConverter).map(sumAll);
