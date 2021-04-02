import { NavbarService } from './../../../../shared/service/navbar.service';
import { Customer } from './../../../../shared/model/customer.model';
import { Component, OnInit } from '@angular/core';
import {CustomersApiService} from './../../../../shared/service/customers-api.service';
import { ResponsePageable } from 'src/app/main/shared/model/responsePageable.model';
import { EntityListSerialize } from 'src/app/main/shared/serialize/entity-list-serialize.model';
import { EntityListAbstract } from 'src/app/main/shared/abstract/entity-list.abstract';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent extends EntityListAbstract implements OnInit {
  customers: Customer[];
  listData: {};
  filter = "";

  constructor(public serviceApi: CustomersApiService, public navbarService: NavbarService) { 
    super(serviceApi, navbarService);
  }

  ngOnInit() {
    this.initListData();
    this.initNavbar();
    this.getFilter();
  }

  public initListData(): void {
    let tableInfo = {
      header: ["Nome", "CPF", "Celular"],
      row: ["name", "cpf", "mobile"]
    };

    this.listData = new EntityListSerialize({
      entity: super.getEntityList(),
      tableStructure: tableInfo
    })
  };

  private initNavbar(): void {
    super.openSecondNavbar();
  }

  public getFilter(): void {
    this.filter = super.getFilter();
  }

}
