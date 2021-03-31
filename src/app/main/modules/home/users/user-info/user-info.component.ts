import { UserService } from '../../../../shared/service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/main/shared/model/user.model';
import { EntityInfoSerializer } from '../../../../shared/model/entity-info-serializer.model';
import { UserApiService } from 'src/app/main/shared/service/user-api.service';
import {UserInfoSerialize} from 'src/app/main/shared/serialize/user-info-serialize.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userId: number;
  user: any;
  navbarRule;
  entityInfoSerialize: EntityInfoSerializer;

  constructor(private route: ActivatedRoute, private service: UserService, private serviceApi: UserApiService) {
    // this.route.params.subscribe(params => this.userId = params['id']);
  }

  ngOnInit(): void {
    this.hideUserNavbar();
    this.getIdByUrl();
    if (this.userId) {
      this.getUserById(this.userId);
    }
    // ERROR
    this.loadUser();
    this.initSerializer();
  }

  getUserById(id: number): void{
    // this.route.params.subscribe(params => this.userId = params['id']);
    this.serviceApi.getById(id).subscribe( result => {
      this.user = result;
    });
  }

  getIdByUrl(): void{
    this.route.params.subscribe(params => this.userId = params['id']);
  }

  hideUserNavbar() {
    this.service.hideUserNavbar();
  }

  loadUser(): void {

  }

  private initSerializer(): void {
    this.entityInfoSerialize = new EntityInfoSerializer({
      entity: this.user,
      fields: new UserInfoSerialize().serialize(this.user)
    });
  }


}
