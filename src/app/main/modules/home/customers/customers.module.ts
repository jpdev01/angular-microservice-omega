import { CustomersListComponent } from './customers-list/customers-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import {TableModule} from '../../../components/table/table.module';
import { TableComponent } from 'src/app/main/components/table/table.component';
import { NavbarSecundaryModule } from 'src/app/main/components/navbar-secundary/navbar-secundary.module';
import { NavbarSecundaryComponent } from 'src/app/main/components/navbar-secundary/navbar-secundary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEntityModule } from 'src/app/main/components/list-entity/list-entity.module';
import { FrmCadModule } from 'src/app/main/components/frm-cad/frm-cad.module';
import {CustomersFrmComponent} from 'src/app/main/modules/home/customers/customers-frm/customers-frm.component';


@NgModule({
  declarations: [CustomersComponent, CustomersListComponent, CustomersFrmComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    NavbarSecundaryModule,
    ListEntityModule,
    FrmCadModule
  ],
  providers: [TableComponent, NavbarSecundaryComponent]
})
export class CustomersModule { }
