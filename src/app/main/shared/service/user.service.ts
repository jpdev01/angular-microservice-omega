import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';
import { Utils } from '../utils/Utils.model';
import { User } from '../model/user.model';
import { InterfaceRule } from '../model/interface-rule.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoged = false;
  interfaceRuleEmitter = new EventEmitter<any>();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(
  ) { }

  // public interfaceRule(name: string, show: boolean) {

  // }

  // hideUserNavbar(): void {
  //   let navbarRule = new InterfaceRule("navbar", false, null);
  //   this.interfaceRuleEmitter.emit(navbarRule);
  // }

  // showUserNavbar(): void {
  //   let navbarRule = new InterfaceRule("navbar", true, null);
  //   this.interfaceRuleEmitter.emit(navbarRule);
  // }
}
