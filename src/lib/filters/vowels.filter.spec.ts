import { vowelsFilter } from './vowels.filter';

describe('', () => {
  it('should filter out the consonants', () => {
    const letters = 'LópEz';
    const result = vowelsFilter(letters);
    expect(result).eq('oE');
  });
});
