import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../shared/service/products.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  productId;
  constructor(private router: Router, private route: ActivatedRoute, private service: ProductsService) { }

  ngOnInit() {
    this.getParams();
    this.hideSearchNavbar();
  }

  getParams(): void {
    this.route.params.subscribe(params => this.productId = params['id']);
  }

  private hideSearchNavbar(): void {
    this.service.showSecondNavbar(false);
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
