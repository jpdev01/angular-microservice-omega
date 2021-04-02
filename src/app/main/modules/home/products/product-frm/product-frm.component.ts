import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntityFrmAbstract } from 'src/app/main/shared/abstract/entity-frm.abstract';
import { EntityFormInterfaceComponent } from 'src/app/main/shared/interface/entity-form.interface';
import { ProductsApiService } from 'src/app/main/shared/service/products-api.service';

@Component({
  selector: 'app-product-frm',
  templateUrl: './product-frm.component.html',
  styleUrls: ['./product-frm.component.css']
})
export class ProductFrmComponent extends EntityFrmAbstract implements OnInit {

  constructor(public route: ActivatedRoute, public serviceApi: ProductsApiService) {
    super(route, serviceApi);
  }

  ngOnInit(): void {
  }


}
