import { IconNavbar } from './../model/icon-navbar.model';
import { EventEmitter, Injectable } from '@angular/core';
import { InterfaceRule } from '../model/interface-rule.model';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  static interfaceRuleEmitter = new EventEmitter<any>();
  static icoms = new EventEmitter<any>();

  constructor() { }

  public showNavbar(show: boolean, component: string): void {
    let navbarRule = new InterfaceRule("navbar", show, null);
    NavbarService.interfaceRuleEmitter.emit(navbarRule);
  }

  public createIcon(icon: any){
    let newIcon = new IconNavbar(icon);
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
