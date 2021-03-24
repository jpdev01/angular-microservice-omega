import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyPipeFilter'
})
export class EnumKeyPipe implements PipeTransform {

  transform(values, args:string[]) : any {
    return Object.keys(values).map(key => values[key]).filter(val => typeof val === 'string') as string[];
  }
}
//return items.filter(item => item.name && item.name.indexOf(term) !== -1);

//Object.keys(myEnum).map(key => myEnum[key]).filter(value => typeof value === 'string') as string[];
