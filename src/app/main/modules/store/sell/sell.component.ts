import { IconNavbar } from './../../../shared/model/icon-navbar.model';
import { Sale } from './../../../shared/model/sale.model';
import { SaleApiService } from './../../../shared/service/api/sale-api.service';
import { CustomersApiService } from './../../../shared/service/customers-api.service';
import { RadioInputService } from './../../../shared/service/form/radio-input.service';
import { Customer } from './../../../shared/model/customer.model';
import { Product } from './../../../shared/model/product.model';
import { FormField } from './../../../shared/model/form-field.model';
import { ProductsApiService } from '../../../shared/service/api/products-api.service';
import { EntityListSerialize } from './../../../shared/serialize/entity-list-serialize.model';
import { Component, OnInit } from '@angular/core';
import { FieldFormType } from 'src/app/main/shared/enum/field-form-type.enum';
import { CookieService} from 'ngx-cookie-service';
import { config } from 'rxjs';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  products: Product[];
  customer: Customer;
  sale = new Sale();
  componentsNav: IconNavbar[];
  selectedNav: IconNavbar;

  constructor(
    private radioService: RadioInputService,
    private customerApiService: CustomersApiService,
    private saleApiService: SaleApiService,
    private cookieService: CookieService
  ){

  }


  public save(): void {
    this.products = this.getListProduct();
    this.sale.customer = this.customer;
    this.sale.products = this.products;
    this.saleApiService.save(this.sale).subscribe(result => console.log(result));
  }

  /*
* COOKIE
*/
  getListProduct(): Product[] {
    let productsObject = this.cookieService.get('store-products');
    if (productsObject) {
      return JSON.parse(productsObject);
    }
    return [];
  }

  ngOnInit(){
    this.initNav();
    this.radioService.getRadioEvent().subscribe(event => {
      let customerId = event.target.value;
      this.customerApiService.getById(customerId).subscribe(customer => this.customer = customer);
    });
  }

  initNav(): void {
    this.componentsNav = [
      new IconNavbar({
        name: 'Produtos',
        action: () => {
          this.changeSelectedNav(0);
        }
      }),
      new IconNavbar({
        name: 'Pagamento',
        action: () => {
          this.changeSelectedNav(1);
        }
      })
    ];
    this.selectedNav = this.componentsNav[0];
  }

  changeSelectedNav(index: number): void{
    this.selectedNav = this.componentsNav[index];
  }
}

