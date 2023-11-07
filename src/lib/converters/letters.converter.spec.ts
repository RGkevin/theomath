import { describe, expect } from 'vitest';
import { lettersConverter } from './letters.converter';

describe('Letters converter to parse strings to numerological values', () => {
  it('should convert a name to numbers', () => {
    const name = 'Alisson Galeano';
    const name2 = 'Kevin López';
    const result = lettersConverter(name);
    const result2 = lettersConverter(name2);
    expect(result).toEqual(9);
    expect(result2).toEqual(9);
  });
});
