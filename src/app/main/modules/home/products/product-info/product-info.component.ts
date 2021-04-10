import { PatternUrl } from './../../../../shared/utils/PatternUrl.model';
import { NavbarService } from 'src/app/main/shared/service/navbar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../shared/service/products.service';
import { EntityInfoInterface } from 'src/app/main/shared/interface/entity-info.interface';
import { ProductsApiService } from 'src/app/main/shared/service/products-api.service';
import { FormGroupSerializer } from 'src/app/main/shared/model/form-group-serializer.model';
import { ProductInfoSerializer } from 'src/app/main/shared/serialize/product-info.serialize';
import { EntityInfoSerializer } from 'src/app/main/shared/model/entity-info-serializer.model';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit, EntityInfoInterface {
  entityInfoSerialize: any;
  productId;
  product: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProductsService,
    private serviceApi: ProductsApiService,
    private navbarService: NavbarService
    ) { }

  ngOnInit() {
    this.loadIdByUrl();
    this.hideSearchNavbar();
    if (this.productId) {
      this.getEntityInfoById(this.productId);
    }
  }

  loadEntityInfoSerialize(): void {
    this.entityInfoSerialize = new EntityInfoSerializer({
      label: 'Produto',
      entity: this.product,
      groups: new ProductInfoSerializer().serialize(this.product),
      url: new PatternUrl().product
    });
  }

  loadIdByUrl(): void {
    this.route.params.subscribe(params => this.productId = params['id']);
  }

  getEntityInfoById(id: any): void {
    this.serviceApi.getById(id).subscribe( result => {
      this.product = result;
      this.loadEntityInfoSerialize();
    });
  }

  private hideSearchNavbar(): void {
    this.navbarService.showNavbar(false);
  }

  // getParams(): void {
  //   this.router.queryParams
  //     .filter(params => params.order)
  //     .subscribe(params => {
  //       console.log(params); // { order: "popular" }

  //       this.order = params.order;
  //       console.log(this.order); // popular
  //     }
  //   );
  // }



}
