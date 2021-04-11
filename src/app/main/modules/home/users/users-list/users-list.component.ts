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
import { EntityListInterfaceComponent } from 'src/app/main/shared/interface/entity-list.interface';
import { EntityListSerialize } from 'src/app/main/shared/serialize/entity-list-serialize.model';
import { PatternUrl } from 'src/app/main/shared/utils/PatternUrl.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent extends EntityListAbstract implements OnInit, EntityListInterfaceComponent {

  public users: User[];
  filter = "";
  listData: EntityListSerialize;

  constructor(private service: UserService, public serviceApi: UserApiService, private router: Router, public utils: Utils, public navbarService: NavbarService) {
    super(serviceApi, navbarService);
  }

  ngOnInit(): void {
    this.openListNavbar();
    this.initListData();
    this.getFilter();
  }

  /*
  getUsers() {
    super.getEntityList().subscribe(result => {
      this.users = result.content;
      this.initListData();
    }, error => {
      console.log("erro: " + error);
    })
  }
*/
  public openUserInfo(u: User): void {
    this.redirectToUserInfo(u.id);
  }

  redirectToUserInfo(id: number){
    this.router.navigate(['home/user/info', id]);
  }

  public openListNavbar(): void {
    super.openListNavbar();
  }

  public initListData(): void {
    let tableInfo = {
      header: ["Login", "Senha", "Permissão", ""],
      row: ["login", "password", "permission", ""]
    };

    this.listData = new EntityListSerialize({
      entity: super.getEntityList(),
      tableStructure: tableInfo,
      infoUrl: new PatternUrl().user
    });
  }

  public getFilter(): void {
    this.filter = super.getFilter();
  }
}
