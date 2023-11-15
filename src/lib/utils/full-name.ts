import { BirthStamp } from '../types'

export const useFullName = ({
  names,
  mother,
  father,
}: BirthStamp): string[] => {
  const fatherLastNames = father
    ? [
        father.firstLastName,
        ...(father.secondLastName ? [father.secondLastName] : []),
      ]
    : []

  const motherLastNames = mother
    ? [
        mother.firstLastName,
        ...(mother.secondLastName ? [mother.secondLastName] : []),
      ]
    : []

  return [...names, ...fatherLastNames, ...motherLastNames]
}
