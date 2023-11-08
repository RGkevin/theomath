import { ParentIdentity } from './parent.identity';

export interface BirthStamp {
  names: string[];
  date: Date;
  father?: ParentIdentity;
  mother?: ParentIdentity;
}
