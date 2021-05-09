import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], term): any {
    if (items && term) {
      if (this.isUser(items)) {
        return items.filter(item => item.login != null && item.login.indexOf(term) !== -1);
      }
      if (items && items[0].name){
        return items.filter(item => item.name && item.name.indexOf(term) !== -1);
      }
      return this.subFilter(items, term);
    }
    return items;
  }

  isUser(items: any): boolean{
    if (items[0] && items[0].login != null) {
      return true;
    }
    return false;
  }

  subFilter(items, term){
    if (items[0].value){
      return items.filter(itemArray => itemArray.value.filter(item => item && this.itemIsString(item) && `${item}`.indexOf(term) !== -1).length > 0 ? true : false);
    }
    return items.filter(itemArray => itemArray.filter(item => item && this.itemIsString(item) && `${item}`.indexOf(term) !== -1).length > 0 ? true : false);
  }

  itemIsString(item: any): boolean{
    return typeof(item) === "string";
  }


}
