export class PatternUrl {
    home = 'home';
    product = 'product';
    customer = 'customer';
    user = 'user';
    category = 'category';
    provider = 'provider';
    storeSpace = 'store';

    list= 'list';
    frm= 'frm';

    abstract = 'abstract';

    eformBuild = "eform/build";

    getFieldHome(url: string): string{
      return '/' + this.home + '/' + url;
    }

    getTarget(item): string {
      if (item.newTab){
        return "_blank";
      }
      return "";
    }

}
