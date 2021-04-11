export class PatternUrl {
    home = 'home';
    product = 'product';
    customer = 'customer';
    user = 'user';
    category = 'category';
    provider = 'provider';

    list= 'list';
    frm= 'frm';

    abstract = 'abstract';

    getFieldHome(url: string): string{
      return '/' + this.home + '/' + url;
    }

}
