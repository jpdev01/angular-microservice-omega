import { CategoryApiService } from 'src/app/main/shared/service/api/category-api.service';

import { CategoriesListComponent } from './../../categories/categories-list/categories-list.component';
import { ResponsePageable } from './../../../../shared/model/responsePageable.model';
import { Utils } from './../../../../shared/utils/Utils.model';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/model/product.model';
import { ProductsApiService } from '../../../../shared/service/api/products-api.service';
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
  listData: EntityListSerialize;
  categoriesTree;
  optionsTree;

  constructor(
    public serviceApi: ProductsApiService,
    private utils: Utils,
    private router: Router,
    private service: ProductsService,
    public navbarService: NavbarService,
    private categoriesApiService: CategoryApiService
  ) {
    super(serviceApi, navbarService);
  }

  ngOnInit() {
    this.initListData();
    this.getFilter();
    this.getCategoriesTree();
    this.initOptionsPagination();
  }

  public getFilter(): void {
    this.filter = super.getFilter();
  }

  redirectToInfo(id: number) {
    this.router.navigate(['home/product/', id]);
  }

  public openProductInfo(product: Product) {
    this.redirectToProductInfo(product.id);
  }

  private redirectToProductInfo(id: number) {
    this.router.navigate(['home/products/info', id]);
  }

  public initListData() {
    let tableInfo = {
      header: ["Código", "Nome", "Fornecedor", ""],
      row: ["code", "name", "provider.name", ""]
    };

    this.listData = new EntityListSerialize({
      entity: super.getEntityList(),
      tableStructure: tableInfo,
      infoUrl: new PatternUrl().product
    })
  }

  public getCategoriesTree(): void {
    this.categoriesApiService.getAll().subscribe(categories => {
      this.categoriesTree = categories.content;
      this.getTreeOnClick();
    })
  }

  private getTreeOnClick(): void {
    this.categoriesTree.onclick = (category) => {
      if (category === "all") {
        this.serviceApi.getAll().subscribe(products => {
          this.listData.entity = products.content;
        })
      }
      else {
        this.serviceApi.getAllFromCategory(category).subscribe((products) => {
          this.listData.entity = products;
        })
      }
    }
  }

  public initOptionsPagination(): void {
    this.optionsTree = {
      elements: ["Categorias", "Fornecedores"]
    }
  }

}
