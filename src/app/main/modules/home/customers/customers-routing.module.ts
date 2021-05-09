import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomersFrmComponent } from './customers-frm/customers-frm.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

const routes: Routes = [
  {
    path: '', component: CustomersComponent,
    children: [
      { path: 'frm', component: CustomersFrmComponent},
      { path: 'frm/:id', component: CustomersFrmComponent },
     { path: 'info/:id', component: CustomerInfoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
