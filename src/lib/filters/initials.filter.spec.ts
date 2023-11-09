import { describe, expect } from 'vitest';
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
      timeZone: 'America/Guatemala',
    };
    const result = initialsFilter(birthStamp);
    expect(result).to.have.all.members(['K', 'E', 'L', 'V']);
  });
  it('should get the initials for the given birth stamp without father', () => {
    const birthStamp: BirthStamp = {
      names: ['Kevin', 'Eduardo'],
      mother: {
        firstLastName: 'Valle',
      },
      date: new Date(),
      timeZone: 'America/Guatemala',
    };
    const result = initialsFilter(birthStamp);
    expect(result).to.have.all.members(['K', 'E', 'V']);
  });
  it('should get the initials for the given birth stamp without mother', () => {
    const birthStamp: BirthStamp = {
      names: ['Kevin', 'Eduardo'],
      father: {
        firstLastName: 'López',
      },
      date: new Date(),
      timeZone: 'America/Guatemala',
    };
    const result = initialsFilter(birthStamp);
    expect(result).to.have.all.members(['K', 'E', 'L']);
  });
  it('should get the initials for the given birth stamp with full name', () => {
    const birthStamp: BirthStamp = {
      names: ['Kevin', 'Eduardo'],
      father: {
        firstLastName: 'López',
        secondLastName: 'López',
      },
      mother: {
        firstLastName: 'Valle',
        secondLastName: 'Hernandez',
      },
      date: new Date(),
      timeZone: 'America/Guatemala',
    };
    const result = initialsFilter(birthStamp);
    expect(result).to.have.all.members(['K', 'E', 'L', 'L', 'V', 'H']);
  });
});
