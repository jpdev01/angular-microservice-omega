import { ListEntityModule } from './../../../../components/list-entity/list-entity.module';
import { CustomersListComponent } from './customers-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CustomersListComponent],
  imports: [
    CommonModule,
    ListEntityModule
  ], exports: [CustomersListComponent]
})
export class CustomersListModule { }
