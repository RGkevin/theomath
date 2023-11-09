import { charConverter } from '@theomath/source';
import { expect } from 'vitest';

describe('Char Converter', () => {
  it('should convert a char to its numerologist value', () => {
    const char = 'Ñ';
    const char2 = 'ó';
    const result = charConverter(char);
    const result2 = charConverter(char2);
    expect(result).eq(5);
    expect(result2).eq(6);
  });
  it('should should not convert a char to its numerological value', () => {
    const char = '$';
    const result2 = charConverter(char);
    expect(result2).eq(null);
  });
});
