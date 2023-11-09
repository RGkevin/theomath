import { describe, expect } from 'vitest';
import { BirthStamp } from '../types';
import { initiation } from '@theomath/source';

describe('Get the Initiation of a Birth Stamp', () => {
  it('should get the LifePath values for the given birth stamp', () => {
    const birthStamp: BirthStamp = {
      names: ['Kevin', 'Eduardo'],
      father: {
        firstLastName: 'López',
      },
      mother: {
        firstLastName: 'Valle',
      },
      date: new Date('1992-05-15T15:15:00.000Z'),
      timeZone: 'America/Guatemala',
    };

    const result = initiation(birthStamp);

    expect(result).to.have.all.members([2175, 15, 6]);
  });
});
