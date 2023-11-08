import { BirthStamp } from '../types';
import { useParentInitials } from './parent.initials';

/**
 * Returns the initials of the Birth Stamp
 * @param names
 * @param father
 * @param mother
 */
export const useInitials = ({
  names,
  father,
  mother,
}: BirthStamp): string[] => {
  const nameInitials = names.map((name) => name.charAt(0));
  const fatherInitials = father ? useParentInitials(father) : [];
  const motherInitials = mother ? useParentInitials(mother) : [];

  return [...nameInitials, ...fatherInitials, ...motherInitials];
};
