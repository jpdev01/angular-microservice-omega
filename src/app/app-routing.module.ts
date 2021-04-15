import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './main/shared/safety/AuthGuard.model';


const routes: Routes = [
  { path: 'security', loadChildren: () => import('./main/modules/login/login.module').then(m => m.LoginModule) },
  {
    path: '',
    redirectTo: '/security',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./main/modules/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./main/modules/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  { path: 'main', loadChildren: () => import('./main/modules/home/main/main.module').then(m => m.MainModule) },
  { path: 'store-space', loadChildren: () => import('./main/modules/store-space/store-space.module').then(m => m.StoreSpaceModule) }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
      CommonModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
