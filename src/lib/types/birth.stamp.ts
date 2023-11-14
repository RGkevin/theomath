import { ParentIdentity } from './parent.identity'

export interface BirthStamp {
  names: string[]
  date: Date
  timeZone: string
  father?: ParentIdentity
  mother?: ParentIdentity
}
