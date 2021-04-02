import { ResponsePageable } from './../../../../shared/model/responsePageable.model';
import { Utils } from './../../../../shared/utils/Utils.model';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/model/product.model';
import { ProductsApiService } from '../../../../shared/service/products-api.service';
import { ProductsService } from '../../../../shared/service/products.service';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/main/shared/service/navbar.service';
import { EntityListSerialize } from 'src/app/main/shared/serialize/entity-list-serialize.model';
import { EntityListAbstract } from 'src/app/main/shared/abstract/entity-list.abstract';
import { PatternUrl } from 'src/app/main/shared/utils/PatternUrl.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends EntityListAbstract implements OnInit {
  filter = "";
  listData: {};

  constructor(public serviceApi: ProductsApiService, private utils: Utils, private router: Router, private service: ProductsService, public navbarService: NavbarService) { 
    super(serviceApi, navbarService);
  }

  ngOnInit() {
    this.openSecondNavbar();
    this.initListData();
    this.getFilter();
  }



  public openSecondNavbar(): void {
    this.navbarService.showNavbar(true);
  }

  public getFilter(): void {
    this.filter = super.getFilter();
  }

  redirectToUserInfo(id: number){
    this.router.navigate(['home/product/', id]);
  }

  public openProductInfo(product: Product){
    this.redirectToProductInfo(product.id);
  }

  private redirectToProductInfo(id: number){
    this.router.navigate(['home/products/info', id]);
  }

  public initListData(){
    let tableInfo = {
      header: ["Código", "Nome", "Categoria", ""],
      row: ["code", "name", "category", ""]
    };

    this.listData = new EntityListSerialize({
      entity: super.getEntityList(),
      tableStructure: tableInfo,
      infoUrl: new PatternUrl().product
    })
  }

}
