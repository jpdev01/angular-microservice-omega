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

  provider: Provider;

  constructor(options: {
    id?: number;
    name?: string;
    finalValue?: number;
    initialValue?: number;

    description?: string;
    qtde?: number;
    // melhorar para select with enum
    color?: string;
    genre?: string;

    entryDate?: string;
    style?: string;
    size?: string;
    size2?: string;
    code?: string;
    categories?: Category[];
    provider?: Provider;
  } = {}){
    this.id = options.id;
    this.name = options.name;
    this.finalValue = options.finalValue;
    this.initialValue = options.initialValue;
    this.description = options.description;
    this.qtde = options.qtde;
    this.color = options.color;
    this.genre = options.genre;
    
    this.entryDate = options.entryDate;
    this.style = options.style;
    this.size = options.size;
    this.size2 = options.size2;
    this.code = options.code;
    this.categories = options.categories;
    this.provider = options.provider;
  }
}
