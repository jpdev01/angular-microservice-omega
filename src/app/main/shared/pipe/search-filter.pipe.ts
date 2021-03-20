import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], term: string): any {
    debugger;
    if (items && term) {
      if (this.isUser(items)) {
        return items.filter(item => item.login != null && item.login.indexOf(term) !== -1);
      }
      return items.filter(item => item.login.indexOf(term) !== -1);
    }
    return items;
  }

  isUser(items: any): boolean{
    if (items[0] && items[0].login != null) {
      return true;
    }
    return false;
  }

}
