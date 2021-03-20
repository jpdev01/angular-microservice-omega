import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import {TableModule} from '../../../components/table/table.module';
import { TableComponent } from 'src/app/main/components/table/table.component';
import { NavbarSecundaryModule } from 'src/app/main/components/navbar-secundary/navbar-secundary.module';
import { NavbarSecundaryComponent } from 'src/app/main/components/navbar-secundary/navbar-secundary.component';


@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    TableModule,
    NavbarSecundaryModule
  ],
  providers: [TableComponent, NavbarSecundaryComponent]
})
export class CustomersModule { }
