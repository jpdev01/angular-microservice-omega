import { UserService } from './../../../shared/service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/main/shared/model/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userId: number;
  user: User;

  constructor(private route: ActivatedRoute, private service: UserService) {
    this.route.params.subscribe(params => this.userId = params['id']);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.userId = params['id']);
  }

  loadUserInfo(id: number): void{
    this.service.getUser(id).subscribe(result => {
      this.user = result[0];
    });
  }

}
