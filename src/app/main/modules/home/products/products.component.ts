import { Component, OnInit } from '@angular/core';
import { InterfaceRule } from 'src/app/main/shared/model/interface-rule.model';
import { ProductsService } from 'src/app/main/shared/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  navbarShow = false;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    //this.interfaceRuleNavbar();
  }

  // interfaceRuleNavbar():void {
  //   this.service.interfaceRuleEmitter.subscribe(
  //     (interfaceRule: InterfaceRule) => {
  //       if (interfaceRule.element === 'navbar') {
  //         if (interfaceRule.show == true) {
  //           this.navbarShow = true;

  //         } else {
  //           this.navbarShow = false;
  //         }
  //       }
  //     }
  //   );
  // }

}
