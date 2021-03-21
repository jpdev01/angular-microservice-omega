import { ResponsePageable } from './../../../../shared/model/responsePageable.model';
import { Utils } from './../../../../shared/utils/Utils.model';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/model/product.model';
import { ProductsApiService } from '../../../../shared/service/products-api.service';
import { ProductsService } from '../../../../shared/service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[];
  filter = "";

  constructor(private serviceApi: ProductsApiService, private utils: Utils, private router: Router, private service: ProductsService) { }

  ngOnInit() {
    this.getProducts();
    this.createFilter();
    this.showNavbar();
  }

  getProducts(): void {
    this.serviceApi.getProducts().subscribe((result: ResponsePageable ) => {
      this.products = result.content;
    },
    (err) => console.log("erro encontrado: " + err)
    );
  }

  private createFilter(): void {
    this.utils.emitterFilterChange.subscribe(
      (filter) => {
        this.filter = filter;
      }
    );
  }

  public openProductInfo(product: Product){
    this.redirectToProductInfo(product.id);
  }

  private redirectToProductInfo(id: number){
    // this.router.navigate(['home/product/info'], { queryParams: { id: id } });
    this.router.navigate(['home/user/info', id]);
  }

  private showNavbar(): void {
      this.service.showUserNavbar(true);
  }

}
