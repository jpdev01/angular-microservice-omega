export class Category {
  id: number;
  name: string;
  description: string;

  constructor(options: {
    id?: number;
    name?: string;
    description?: string;
  }={}){
    this.id = options.id;
    this.name = options.name;
    this.description = options.description;
  }
}
