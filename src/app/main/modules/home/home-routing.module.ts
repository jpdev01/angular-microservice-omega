import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
  children: [
    { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
    { path: 'user', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
    { path: 'cutomers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
    { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
  ]
  },
  { path: 'home', component: HomeComponent }
  // { path: 'users', loadChildren: () => import('../users/users.module').then(m => m.UsersModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
