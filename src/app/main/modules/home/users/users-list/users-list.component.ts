import { NavbarService } from './../../../../shared/service/navbar.service';
import { Utils } from '../../../../shared/utils/Utils.model';
import { ResponsePageable } from '../../../../shared/model/responsePageable.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/main/shared/model/user.model';
import { UserService } from 'src/app/main/shared/service/user.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { UserApiService } from 'src/app/main/shared/service/user-api.service';
import { EntityListAbstract } from 'src/app/main/shared/abstract/entity-list.abstract';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent extends EntityListAbstract implements OnInit {

  public users: User[];
  filter = "";
  tableInfo: {};

  constructor(private service: UserService, public serviceApi: UserApiService, private router: Router, public utils: Utils, public navbarService: NavbarService) {
    super(serviceApi, navbarService);
  }

  ngOnInit(): void {
    this.getUsers();
    this.openSecondNavbar();
    this.initTableInfo();
    this.getFilter();
  }

  getUsers() {
    super.getEntityList().subscribe(result => {
      this.users = result.content;
    }, error => {
      console.log("erro: " + error);
    })
  }

  public openUserInfo(u: User): void {
    this.redirectToUserInfo(u.id);
  }

  redirectToUserInfo(id: number){
    this.router.navigate(['home/user/info', id]);
  }

  public openSecondNavbar(): void {
    super.openSecondNavbar();
  }

  public initTableInfo(): void {
    this.tableInfo = {
      header: ["Login", "Senha", "Permissão", ""],
      row: ["login", "password", "permission", ""]
    };
  }

  public getFilter(): void {
    this.filter = super.getFilter();
  }
}
