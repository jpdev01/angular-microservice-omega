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

  constructor(options: {
    id?: number;
    totalValue?: number;
    date?: Date;
    description?: string;
    installments?: number;

    customer?: Customer;
    products?: Product[];
    seller?: User;
    status?: SaleStatus;
  } = {}){
    this.id = options.id;
    this.totalValue = options.totalValue;
    this.date = options.date;
    this.description = options.description;
    this.installments = options.installments;
    this.customer = options.customer;
    this.products = options.products;
    this.seller = options.seller;
    this.status = options.status;
  }


}
