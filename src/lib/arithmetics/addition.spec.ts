import { addition } from './addition';

describe('Theosophical Addition', () => {
  it('should get the theosophical addition result from given numbers', () => {
    const num = 4;
    const result = addition(num);
    expect(result).to.eq(10);
  });
});
