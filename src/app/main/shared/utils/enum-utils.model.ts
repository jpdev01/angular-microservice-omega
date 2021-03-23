export class EnumUtils {

  constructor(){}

  getStringsOfEnum(myEnum){
    return Object.keys(myEnum).map(key => myEnum[key]).filter(value => typeof value === 'string') as string[];
  }
}
