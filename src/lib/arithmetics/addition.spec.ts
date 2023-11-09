import { expect } from 'chai';
import { addition } from './addition';

describe('Theosophical arithmetic', () => {
  it('should get theosophical additions for given number', () => {
    const num = 56;
    const sums = addition([num]);
    expect(sums).to.have.all.members([56, 11, 2]);
  });

  it('should get theosophical additions for given number until special', () => {
    const num = 56;
    const sums = addition([num], true);
    expect(sums).to.have.all.members([56, 11]);
  });
});
