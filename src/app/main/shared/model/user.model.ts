import { Permission } from '../enum/permission.enum';
import { Active } from '../enum/active.enum';
import { Customer } from './customer.model';

export class User
{
  id: number;
  login: string;
  password: string;
  permission: Permission;
  active = Active.ACTIVE;
  customer: Customer;

  constructor(options: {
    id?: number;
    login?: string;
    password?: string;
    permission?: Permission;
    active?: Active;
    customer?: Customer;
  } = {}){
    this.id = options.id;
    this.login = options.login;
    this.password = options.password;
    this.permission = options.permission;
    this.active = options.active;
    this.customer = options.customer;
  }
  public getPermission(): Permission {
    return this.permission;
  }

  public setPermission(permission: Permission) {
    this.permission = permission;
  }
}
