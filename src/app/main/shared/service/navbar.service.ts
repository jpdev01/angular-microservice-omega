import { EventEmitter, Injectable } from '@angular/core';
import { InterfaceRule } from '../model/interface-rule.model';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  static interfaceRuleEmitter = new EventEmitter<any>();

  constructor() { }

  public showNavbar(show: boolean): void {
    let navbarRule = new InterfaceRule("navbar", show, null);
    NavbarService.interfaceRuleEmitter.emit(navbarRule);
  }

  // filter!
  static emitterFilterChange = new EventEmitter<string>();


  // hideUserNavbar(): void {
  //   let navbarRule = new InterfaceRule("navbar", false, null);
  //   this.interfaceRuleEmitter.emit(navbarRule);
  // }

  // showUserNavbar(): void {
  //   let navbarRule = new InterfaceRule("navbar", true, null);
  //   this.interfaceRuleEmitter.emit(navbarRule);
  // }
}
