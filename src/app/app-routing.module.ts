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
  { path: 'home', loadChildren: () => import('./main/modules/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
