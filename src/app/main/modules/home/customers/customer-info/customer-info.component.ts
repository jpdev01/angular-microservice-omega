import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntityInfoInterface } from 'src/app/main/shared/interface/entity-info.interface';
import { Customer } from 'src/app/main/shared/model/customer.model';
import { EntityInfoSerializer } from 'src/app/main/shared/model/entity-info-serializer.model';
import { FormGroupSerializer } from 'src/app/main/shared/model/form-group-serializer.model';
import { CustomerInfoSerialize } from 'src/app/main/shared/serialize/customer-info.serialize';
import { UserInfoSerialize } from 'src/app/main/shared/serialize/user-info-serialize.model';
import { CustomersApiService } from 'src/app/main/shared/service/customers-api.service';
import { NavbarService } from 'src/app/main/shared/service/navbar.service';
import { PatternUrl } from 'src/app/main/shared/utils/PatternUrl.model';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit, EntityInfoInterface {
  customerId: any;
  entityInfoSerialize: any;
  customer: Customer;

  constructor(private navbarService: NavbarService, private route: ActivatedRoute, private serviceApi: CustomersApiService) { }

  ngOnInit(): void {
    this.hideUserNavbar();
    this.loadIdByUrl();
    if (this.customerId) {
      this.getEntityInfoById(this.customerId);
    }
  }

  loadEntityInfoSerialize(): void {
    this.entityInfoSerialize = new EntityInfoSerializer({
      label: "Cliente",
      entity: this.customer,
      url: new PatternUrl().customer,
      groups: new CustomerInfoSerialize().serialize(this.customer)
    });
  }
  loadIdByUrl(): void {
    this.route.params.subscribe(params => this.customerId = params['id']);
  }
  getEntityInfoById(id: any): void {
    this.serviceApi.getById(id).subscribe( result => {
      this.customer = result;
      this.loadEntityInfoSerialize();
    });
  }

  hideUserNavbar() {  
    this.navbarService.showNavbar(false);
  }

}
