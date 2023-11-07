import { addition } from './addition';

export const additionGroup = (nums: number[]): { [key: number]: number[] } => {
  const result: { [key: number]: number[] } = {};

  for (const num of nums) result[num] = addition([num]);

  return result;
};
