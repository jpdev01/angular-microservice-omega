import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCustomerComponent } from './select-customer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SelectCustomerComponent], exports:[SelectCustomerComponent]
})
export class SelectCustomerModule { }
