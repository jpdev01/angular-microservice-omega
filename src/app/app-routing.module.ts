import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {HomeComponent} from './views/lives/home/home.component';


const routes: Routes = [
  { path: 'security', loadChildren: () => import('./main/frontend/login/login.module').then(m => m.LoginModule) },
  {
    path: '',
    redirectTo: '/security',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./main/frontend/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./main/frontend/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
