import {SecurityLevel} from '../enum/SecurityLevel.enum';

export class IconNavbar {
  title: string;
  image: string;
  link: string;
  security: SecurityLevel;
  enable = true;

  constructor(name: string, image: string, link: string){
    this.title = name;
    this.image = image;
    this.link = link;
  }

}
