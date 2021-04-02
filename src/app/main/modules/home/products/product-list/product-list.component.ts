import { ResponsePageable } from './../../../../shared/model/responsePageable.model';
import { Utils } from './../../../../shared/utils/Utils.model';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/model/product.model';
import { ProductsApiService } from '../../../../shared/service/products-api.service';
import { ProductsService } from '../../../../shared/service/products.service';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/main/shared/service/navbar.service';
import { EntityListSerialize } from 'src/app/main/shared/serialize/entity-list-serialize.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[];
  filter = "";
  listData: {};

  constructor(private serviceApi: ProductsApiService, private utils: Utils, private router: Router, private service: ProductsService, private navbarService: NavbarService) { }

  ngOnInit() {
    this.getProducts();
    this.openSecondNavbar();
    this.initTableInfo();
    this.getFilter();
  }

  getProducts(): void {
    this.serviceApi.getAll().subscribe((result: ResponsePageable ) => {
      this.products = result.content;
    },
    (err) => console.log("erro encontrado: " + err)
    );
  }

  private openSecondNavbar(): void {
    this.navbarService.showNavbar(true);
  }

  private getFilter(): void {
    NavbarService.emitterFilterChange.subscribe((filter) => this.filter = filter);
  }

  redirectToUserInfo(id: number){
    this.router.navigate(['home/product/', id]);
  }

  public openProductInfo(product: Product){
    this.redirectToProductInfo(product.id);
  }

  private redirectToProductInfo(id: number){
    // this.router.navigate(['home/product/info'], { queryParams: { id: id } });
    this.router.navigate(['home/products/info', id]);
  }

  private showNavbar(): void {
      this.service.showSecondNavbar(true);
  }

  private initTableInfo(): void {
    let tableInfo = {
      header: ["Código", "Nome", "Categoria", ""],
      row: ["code", "name", "category", ""]
    };

    this.listData = new EntityListSerialize({
      entity: this.products,
      tableStructure: tableInfo
    })
  }

}
