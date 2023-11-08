import { vowels } from '../dictionaries/base9.dictionary.json';

const vowelsStr = vowels.join('');

export const vowelsFilter = (letters: string): string => {
  const exp = new RegExp(`[${vowelsStr}]+`, 'gi');
  return letters.match(exp)?.join('') ?? '';
};
