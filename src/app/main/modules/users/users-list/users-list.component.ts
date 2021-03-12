import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/main/shared/model/user.model';
import { UserService } from 'src/app/main/shared/service/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor(private service: UserService) { debugger; }

  ngOnInit(): void {
    debugger;
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe(data => {
      this.users = data.content;
    });
  }

}
