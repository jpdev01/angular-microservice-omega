import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], term: string): any {
    debugger;
    if (items && term) {
      // I am unsure what id is here. did you mean title?
      return items.filter(item => item.id.indexOf(term) !== -1);
    }
    return items;
  }

}
