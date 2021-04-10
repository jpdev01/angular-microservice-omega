import { CustomersListComponent } from './customers-list/customers-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import {TableModule} from '../../../components/table/table.module';
import { TableComponent } from 'src/app/main/components/table/table.component';
import { NavbarListModule } from 'src/app/main/components/navbar-list/navbar-list.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEntityModule } from 'src/app/main/components/list-entity/list-entity.module';
import { FrmCadModule } from 'src/app/main/components/frm-cad/frm-cad.module';
import {CustomersFrmComponent} from 'src/app/main/modules/home/customers/customers-frm/customers-frm.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { EntityInfoModule } from 'src/app/main/components/entity-info/entity-info.module';


@NgModule({
  declarations: [CustomersComponent, CustomersListComponent, CustomersFrmComponent, CustomerInfoComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    NavbarListModule,
    ListEntityModule,
    FrmCadModule,
    EntityInfoModule
  ],
  providers: [TableComponent]
})
export class CustomersModule { }
