import { element } from 'protractor';
import { UserService } from './../../shared/service/user.service';
import { Utils } from './../../shared/utils/Utils.model';
import { InterfaceRule } from './../../shared/model/interface-rule.model';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  navbarShow = true;

  constructor(private userService: UserService) { }

  ngOnInit(){
    this.userService.interfaceRuleEmitter.subscribe(
      (interfaceRule: InterfaceRule) => {
        if (interfaceRule.element === 'navbar') {
          if (interfaceRule.show == true) {
            this.navbarShow = true;

          } else {
            this.navbarShow = false;
          }
        }
      }
    );
  }







}
