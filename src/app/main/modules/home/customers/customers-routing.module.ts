import { CustomersListComponent } from './customers-list/customers-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomersFrmComponent } from './customers-frm/customers-frm.component';

const routes: Routes = [
  {
    path: '', component: CustomersComponent,
    children: [
      { path: '', component: CustomersListComponent },
      { path: 'frm', component: CustomersFrmComponent}
      // { path: 'info/:id', component: UserInfoComponent },
      // { path: 'edit', component: UserFrmComponent },
      // { path: 'edit/:id', component: UserFrmComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
