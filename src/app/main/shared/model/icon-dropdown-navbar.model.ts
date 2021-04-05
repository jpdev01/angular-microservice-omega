export class IconDropdownNavbar {
  title: string;
  image: string;
  itens: object;

  constructor(options: {
    name?: string;
    image?: string;
    items?: object;
  }={}) {
    this.title = options.name;
    this.image = options.image;
    this.itens = options.items;
  }
}
