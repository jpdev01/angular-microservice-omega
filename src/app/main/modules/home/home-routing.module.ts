import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'customers', loadChildren: () => import('../customers/main/customers.module').then(m => m.CustomersModule) },
  { path: 'customers-list', loadChildren: () => import('../customers/customers-list/customers-list.module').then(m => m.CustomersListModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
