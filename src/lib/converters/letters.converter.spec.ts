import { describe, expect } from 'vitest';
import { lettersConverter } from '@theomath/source';

describe('Letters converter to parse strings to numerological values', () => {
  it('should convert a name to numbers', () => {
    const name = 'Alisson Galeano';
    const name2 = 'Kevin Eduardo López Valle';
    const result = lettersConverter(name);
    const result2 = lettersConverter(name2);
    expect(result).toEqual([54, 9]);
    expect(result2).toEqual([102, 3]);
  });
});
