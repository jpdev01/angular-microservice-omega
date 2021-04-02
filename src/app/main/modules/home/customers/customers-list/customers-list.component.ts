import { NavbarService } from './../../../../shared/service/navbar.service';
import { Customer } from './../../../../shared/model/customer.model';
import { Component, OnInit } from '@angular/core';
import {CustomersApiService} from './../../../../shared/service/customers-api.service';
import { ResponsePageable } from 'src/app/main/shared/model/responsePageable.model';
import { EntityListSerialize } from 'src/app/main/shared/serialize/entity-list-serialize.model';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[];
  listData: {};
  constructor(private serviceApi: CustomersApiService, private navbarService: NavbarService) { }

  ngOnInit() {
    this.getAllCustomers();
    this.initTableInfo();
    this.initNavbar();
  }

  getAllCustomers(): void {
    this.serviceApi.getCustomers().subscribe((result) => {
      this.customers = result.content;
    })
  }

  private initTableInfo(): void {
    let tableInfo = {
      header: ["Nome", "CPF", "Celular"],
      row: ["name", "cpf", "mobile"]
    }

    this.listData = new EntityListSerialize({
      entity: this.customers,
      tableStructure: tableInfo
    })
  };

  private initNavbar(): void {
    this.navbarService.showNavbar(true);
  }

}
