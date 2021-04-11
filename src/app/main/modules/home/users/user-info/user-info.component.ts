import { PatternUrl } from './../../../../shared/utils/PatternUrl.model';
import { NavbarService } from './../../../../shared/service/navbar.service';
import { UserService } from '../../../../shared/service/user.service';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/main/shared/model/user.model';
import { EntityInfoSerializer } from '../../../../shared/model/entity-info-serializer.model';
import { UserApiService } from 'src/app/main/shared/service/user-api.service';
import {UserInfoSerialize} from 'src/app/main/shared/serialize/user-info-serialize.model';
import { FormGroupSerializer } from 'src/app/main/shared/model/form-group-serializer.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userId: number;
  user: any;
  navbarRule;
  entityInfoSerialize: any;

  constructor(private route: ActivatedRoute, private service: UserService, private serviceApi: UserApiService, private navbarService: NavbarService) {
    // this.route.params.subscribe(params => this.userId = params['id']);
  }

  ngOnInit(): void {
    this.hideUserNavbar();
    this.loadIdByUrl();
    if (this.userId) {
      this.getEntityInfoById(this.userId);
    }
  }

  getEntityInfoById(id: number): void{
    this.serviceApi.getById(id).subscribe( result => {
      this.user = result;
      this.loadEntityInfoSerialize();
    });
  }

  loadIdByUrl(): void{
    this.route.params.subscribe(params => this.userId = params['id']);
  }

  hideUserNavbar() {
    this.navbarService.showNavbar(false, new PatternUrl().user);
  }

  private loadEntityInfoSerialize(): void {
    this.entityInfoSerialize = new EntityInfoSerializer({
      label: 'Usuário',
      entity: this.user,
      // groups: [{title: "Informações de Login", content: new UserInfoSerialize().serialize(this.user)}]
      groups: [new FormGroupSerializer({
        formGroupName: "Informações de Login",
        fields: new UserInfoSerialize().serialize(this.user)
      })]
    });
  }


}
