import { BirthStamp } from '../types';
import { personality } from '@theomath/source';
import { expect } from 'vitest';

describe('Personality operation', () => {
  it('should calculate the personality number from Birth Stamp', () => {
    const birthStamp: BirthStamp = {
      mother: {
        firstLastName: 'Valle',
      },
      father: {
        firstLastName: 'López',
      },
      timeZone: 'America/Guatemala',
      date: new Date(),
      names: ['Kevin', 'Eduardo'],
    };
    const result = personality(birthStamp);

    expect(result).to.have.all.members([56, 11, 2]);
  });
  it('should calculate the personality number from Birth Stamp without mother', () => {
    const birthStamp: BirthStamp = {
      father: {
        firstLastName: 'López',
      },
      timeZone: 'America/Guatemala',
      date: new Date(),
      names: ['Kevin', 'Eduardo'],
    };
    const result = personality(birthStamp);

    expect(result).to.have.all.members([46, 10, 1]);
  });
  it('should calculate the personality number from Birth Stamp without father', () => {
    const birthStamp: BirthStamp = {
      mother: {
        firstLastName: 'Valle',
      },
      timeZone: 'America/Guatemala',
      date: new Date(),
      names: ['Kevin', 'Eduardo'],
    };
    const result = personality(birthStamp);

    expect(result).to.have.all.members([38, 11, 2]);
  });
});
