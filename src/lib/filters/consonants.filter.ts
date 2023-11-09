import { vowels } from '../dictionaries/base9.dictionary.json';
import { clean } from '../utils';

const vowelsStr = vowels.join('');

/**
 * Consonants Filter
 * Will remove the vowels in {letters} and return the resulting string
 * @param letters
 */
export const consonantsFilter = (letters: string): string => {
  const exp = new RegExp(`[${vowelsStr}]`, 'gi');
  return clean(letters).replace(exp, '');
};
