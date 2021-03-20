import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/main/shared/model/customer.model';
import {CustomersService } from '../../../../shared/service/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[];

  constructor(private service: CustomersService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.service.getCustomers().subscribe(data => {
      this.customers = data.content;
    });
  }


}
