import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellComponent } from './sell.component';
import { SelectCustomerModule } from '../select-customer/select-customer.module';
import { SelectProductsModule } from '../select-products/select-products.module';


@NgModule({
  declarations: [SellComponent],
  imports: [
    CommonModule,
    SelectProductsModule, SelectCustomerModule
  ]
})
export class SellModule { }
