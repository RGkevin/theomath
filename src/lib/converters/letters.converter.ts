import { addition, sumAll } from '../arithmetics';
import { wordConverter } from './word.converter';

export const lettersConverter = (letters: string): number[] => {
  const words = letters.split(' ');
  const wordsValues = words.map(wordConverter).map(sumAll);
  const wordsValuesSum = sumAll(wordsValues);

  return addition([wordsValuesSum]);
};
