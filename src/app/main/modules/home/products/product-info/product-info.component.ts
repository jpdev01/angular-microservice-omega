import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  productId;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getParams();
  }

  getParams(): void {
    this.route.params.subscribe(params => this.productId = params['id']);
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
