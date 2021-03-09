export class IconDropdownNavbar {
  title: string;
  image: string;
  icons: object;

  constructor(name: string, image: string, icons: object) {
    this.title = name;
    this.image = image;
    this.icons = icons;
  }
}
