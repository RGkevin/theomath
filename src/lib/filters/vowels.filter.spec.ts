import { vowelsFilter } from './vowels.filter';

describe('', () => {
  it('should filter out the consonants', () => {
    const letters = 'KEVin';
    const result = vowelsFilter(letters);
    expect(result).eq('Ei');
  });
});
