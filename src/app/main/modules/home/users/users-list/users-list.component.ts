import { Utils } from '../../../../shared/utils/Utils.model';
import { ResponsePageable } from '../../../../shared/model/responsePageable.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/main/shared/model/user.model';
import { UserService } from 'src/app/main/shared/service/user.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { UserApiService } from 'src/app/main/shared/service/user-api.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users: User[];
  filter = "";
  tableInfo: {};

  constructor(private service: UserService, private serviceApi: UserApiService, private router: Router, public utils: Utils) {

  }

  ngOnInit(): void {
    this.getUsers();
    this.openSecondNavbar();
    this.initTableInfo();
  }

  getUsers() {
    this.serviceApi.getAll().subscribe(
      (result: ResponsePageable) => {
      debugger;
      this.users = [];
      //data.content !
      this.users = result.content;
      console.log(this.users);
    },
    (error) => {

    });
  }

  public openUserInfo(u: User): void {
    this.redirectToUserInfo(u.id);
  }

  redirectToUserInfo(id: number){
    this.router.navigate(['home/user/info', id]);
  }

  private openSecondNavbar(): void {
    this.service.showUserNavbar();
  }

  private initTableInfo(): void {
    this.tableInfo = {
      header: ["Login", "Senha", "Permissão", ""],
      row: ["login", "password", "permission", ""]
    };
  }
}
