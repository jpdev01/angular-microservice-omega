import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import {TableModule} from '../../../components/table/table.module';
import { TableComponent } from 'src/app/main/components/table/table.component';


@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    TableModule
  ],
  providers: [TableComponent]
})
export class CustomersModule { }
