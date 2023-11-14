import { ParentIdentity } from '../types'

export const useParentInitials = ({
  firstLastName,
  secondLastName,
}: ParentIdentity) => {
  return [
    firstLastName.charAt(0),
    ...(secondLastName ? [secondLastName.charAt(0)] : []),
  ]
}
