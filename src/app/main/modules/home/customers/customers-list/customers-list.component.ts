import { NavbarService } from './../../../../shared/service/navbar.service';
import { Customer } from './../../../../shared/model/customer.model';
import { Component, OnInit } from '@angular/core';
import {CustomersApiService} from './../../../../shared/service/customers-api.service';
import { ResponsePageable } from 'src/app/main/shared/model/responsePageable.model';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[];
  tableInfo: {};
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
    this.tableInfo = {
      header: ["Nome", "CPF", "Celular"],
      row: ["name", "cpf", "mobile"]
    }
  };

  private initNavbar(): void {
    this.navbarService.showNavbar(true);
  }

}
