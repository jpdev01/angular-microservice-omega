import { InterfaceRule } from './../model/interface-rule.model';

import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  interfaceRuleEmitter = new EventEmitter<any>();

  showUserNavbar(show: boolean): void {
    let navbarRule = new InterfaceRule("navbar", show, null);
    this.interfaceRuleEmitter.emit(navbarRule);
  }

}
