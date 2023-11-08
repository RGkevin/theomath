import { charConverter } from './char.converter';

export const wordConverter = (word: string): number[] => {
  const result: number[] = [];

  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i);
    const charConverted = charConverter(char);
    if (charConverted) {
      result.push(charConverted);
    }
  }

  return result;
};
