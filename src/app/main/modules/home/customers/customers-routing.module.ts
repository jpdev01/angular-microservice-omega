import { CustomersListModule } from './customers-list/customers-list.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomersFrmComponent } from './customers-frm/customers-frm.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

const routes: Routes = [
  {
    path: '', component: CustomersComponent,
    children: [
      { path: '', component: CustomersListComponent },
      { path: 'frm', component: CustomersFrmComponent},
      { path: 'frm/:id', component: CustomersFrmComponent },
     { path: 'info/:id', component: CustomerInfoComponent }
      // { path: 'edit', component: UserFrmComponent },
      // { path: 'edit/:id', component: UserFrmComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CustomersListModule],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
