import { Category } from "./category.model";
import { Provider } from "./provider.model";

export class Product {
  id: number;
  name: string;
  finalValue: number;
  initialValue: number;

  description: string;
  qtde: number;
  color: string;
  genre: string;

  entryDate: string;
  style: string;
  size: string;
  size2: string;

  code: string;

  categories: Category[];

  provider: Provider[];
}
