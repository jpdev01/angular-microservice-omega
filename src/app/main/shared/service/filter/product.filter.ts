export class ProductFilter {

  filterAll(items: any[], term: string, key: string): any {
    if (items && term) {
      return items.filter(item => item[key] != null && item[key].indexOf(term) !== -1);
    }
    return items;
  }
}
