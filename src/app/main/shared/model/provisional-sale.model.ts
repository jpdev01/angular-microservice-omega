import {Product} from '../model/product.model';

export class ProvisionalSale {
  id: number;
  products: Product[];
  date: Date;

  constructor(options: {
    id?: number;
    products?: Product[];
    date?: Date;
  } = {}){
    this.id = options.id;
    this.products = options.products;
    this.date = options.date;
  }
}
