import { vowels } from '../dictionaries/base9.dictionary.json';
import { clean } from '../utils';

const vowelsStr = vowels.join('');

/**
 * Filter out the consonants in the {letters} param
 * @param letters
 */
export const vowelsFilter = (letters: string): string => {
  const exp = new RegExp(`[${vowelsStr}]+`, 'gi');
  return clean(letters).match(exp)?.join('') ?? '';
};
