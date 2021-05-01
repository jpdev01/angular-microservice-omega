import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { EformModule } from '../../components/eform/eform/eform.module';
import { EformComponent } from '../../components/eform/eform/eform.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
  children: [
    { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
    { path: 'user', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
    { path: 'customer', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
    { path: 'product', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
    { path: 'category', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) },
    { path: 'provider', loadChildren: () => import('./providers/providers.module').then(m => m.ProvidersModule) },
    { path: 'eform/:eformLink', component: EformComponent }
  ]
  },
  { path: 'home', component: HomeComponent }
  // { path: 'users', loadChildren: () => import('../users/users.module').then(m => m.UsersModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes), EformModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
