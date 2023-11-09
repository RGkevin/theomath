import { describe, expect } from 'vitest';
import { BirthStamp } from '../types';
import { expression } from '@theomath/source';

describe('Get the Expression of a Birth Stamp', () => {
  it('should get the expression values for the given birth stamp', () => {
    const birthStamp: BirthStamp = {
      timeZone: 'America/Guatemala',
      names: ['Kevin', 'Eduardo'],
      father: {
        firstLastName: 'López',
      },
      mother: {
        firstLastName: 'Valle',
      },
      date: new Date(),
    };
    const result = expression(birthStamp);

    expect(result).to.have.all.members([102, 3]);
  });
});
