import { ModalModule } from './../../../components/modal/modal.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCustomerComponent } from './select-customer.component';
import { CustomersListModule } from '../../home/customers/customers-list/customers-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    CustomersListModule
  ],
  declarations: [SelectCustomerComponent], exports:[SelectCustomerComponent]
})
export class SelectCustomerModule { }
