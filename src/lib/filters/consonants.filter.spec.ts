import { consonantsFilter } from './consonants.filter';

describe('', () => {
  it('should filter out the vowels', () => {
    const letters = 'KevIn LóPeZ';
    const result = consonantsFilter(letters);
    expect(result).eq('Kvn LPZ');
  });
});
