import {SecurityLevel} from '../enum/SecurityLevel.enum';

export class IconNavbar {
  title: string;
  image: string;
  link: string;
  security: SecurityLevel;
  enable = true;
  action: any;

  constructor(options: {
    name?: string;
    image?: string;
    link?: string;
    action?: any;
  } = {}){
    this.title = options.name;
    this.image = options.image;
    this.link = options.link;
    this.action = options.action;
  }

}
