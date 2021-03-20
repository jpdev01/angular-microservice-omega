import { ResponsePageable } from './../../../shared/model/responsePageable.model';
import { UsersNavbarComponent } from './../users-navbar/users-navbar.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/main/shared/model/user.model';
import { UserService } from 'src/app/main/shared/service/user.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users: User[];
  filter: string;

  // @ViewChild(UsersNavbarComponent, {static: false})
  // filho: UsersNavbarComponent;

  // @ViewChild("filter-users") domReference;

  // @ViewChild("filter-users") domReference: Element;
  // directive: Element;

  constructor(private service: UserService, private router: Router) {

  }

  ngOnInit(): void {
    this.getUsers();
    //this.filter = $("#filter-users").val() + "";
  }

  getUsers() {
    this.service.getUsers().subscribe(
      (result: ResponsePageable) => {
      debugger;
      this.users = [];
      //data.content !
      this.users = result.content;
    },
    (error) => {

    });
  }

  public openUserInfo(u: User): void {
    this.redirectToUserInfo(u.id);
  }


  redirectToUserInfo(id: number){
    this.router.navigate(['home/user', id]);
  }

  ngAfterViewInit() {
    $("#filter-users").keyup( () => {
      this.filter = $("#filter-users").val() + "";
    });
  }

  // @ViewChild(UsersNavbarComponent)
  // set appShark(directive: UsersNavbarComponent) {
  //   debugger;
  //   // this.directive = directive;
  // };




}
