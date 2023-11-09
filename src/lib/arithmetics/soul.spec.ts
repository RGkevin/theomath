import { BirthStamp } from '../types';
import { expect } from 'vitest';
import { soul } from '@theomath/source';

describe('soul operation', () => {
  it('should calculate the soul number from Birth Stamp', () => {
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
    const result = soul(birthStamp);

    expect(result).to.have.all.members([46, 10, 1]);
  });
  it('should calculate the soul number from Birth Stamp without mother', () => {
    const birthStamp: BirthStamp = {
      father: {
        firstLastName: 'López',
      },
      timeZone: 'America/Guatemala',
      date: new Date(),
      names: ['Kevin', 'Eduardo'],
    };
    const result = soul(birthStamp);

    expect(result).to.have.all.members([40, 4]);
  });
  it('should calculate the soul number from Birth Stamp without father', () => {
    const birthStamp: BirthStamp = {
      mother: {
        firstLastName: 'Valle',
      },
      timeZone: 'America/Guatemala',
      date: new Date(),
      names: ['Kevin', 'Eduardo'],
    };
    const result = soul(birthStamp);

    expect(result).to.have.all.members([35, 8]);
  });
});
