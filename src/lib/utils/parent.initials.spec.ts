import { describe } from 'vitest';
import { ParentIdentity } from '../types';
import { useParentInitials } from '@theomath/source';

describe('Initials operation for Parent Identity', () => {
  it('should get the initials of the parent identity', () => {
    const parentIdentity: ParentIdentity = {
      firstLastName: 'Valle',
      secondLastName: 'Hernandez',
    };
    const result = useParentInitials(parentIdentity);
    expect(result).to.have.all.members(['V', 'H']);
  });
});
