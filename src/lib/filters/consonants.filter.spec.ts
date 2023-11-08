import { consonantsFilter } from '@theomath/source';

describe('', () => {
  it('should filter out the vowels', () => {
    const letters = 'KevIn LóPeZ';
    const result = consonantsFilter(letters);
    expect(result).eq('Kvn LPZ');
  });
});
