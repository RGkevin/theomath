import { vowelsFilter } from './vowels.filter';

describe('Vowels filter', () => {
  it('should filter out the consonants', () => {
    const letters = 'LópEz';
    const result = vowelsFilter(letters);
    expect(result).eq('oE');
  });
});
