import { describe } from 'vitest';
import { BirthStamp } from '../types';
import { initialsFilter } from '@theomath/source';

describe('Initials operation', () => {
  it('should get the initials for the given birth stamp', () => {
    const birthStamp: BirthStamp = {
      names: ['Kevin', 'Eduardo'],
      father: {
        firstLastName: 'López',
      },
      mother: {
        firstLastName: 'Valle',
      },
      date: new Date(),
    };
    const result = initialsFilter(birthStamp);
    expect(result).to.have.all.members(['K', 'E', 'L', 'V']);
  });
});
