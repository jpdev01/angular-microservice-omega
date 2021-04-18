import { User } from './user.model';
import { Product } from './product.model';
import { Customer } from './customer.model';
import { SaleStatus } from '../enum/sale-status.enum';
export class Sale {
  id: number;
  totalValue: number;
  date: Date;
  description: string;
  installments: number;

  customer: Customer;
  products: Product[];
  seller: User;
  status: SaleStatus;
  

}
