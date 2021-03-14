import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/main/shared/model/user.model';
import { UserService } from 'src/app/main/shared/service/user.service';
import { DeveloperService } from 'src/app/main/shared/service/developer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users: User[];
  filter: string;

  constructor(private service: UserService, private router: Router,) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe(result => {
      this.users = [];
      //data.content !
      this.users = result.content;
    });
  }

  public openUserInfo(u: User): void {
    this.redirectToUserInfo(u.id);
  }


  redirectToUserInfo(id: number){
    this.router.navigate(['home/user', id]);
  }



}
