import { Permission } from '../enum/permission.enum';
import { Active } from '../enum/active.enum';
import { Customer } from './customer.model';

export class User
{
  id: number;
  login: string;
  password: string;
  permission: Permission;
  active: Active;
  customer: Customer;
}
