import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './main/shared/safety/AuthGuard.model';
import { ForbiddenModule } from './main/components/error/forbidden/forbidden.module';

import { ForbiddenComponent } from './main/components/error/forbidden/forbidden.component';

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
  { path: 'store', loadChildren: () => import('./main/modules/store/store.module').then(m => m.StoreModule) },
  { path: '403', component: ForbiddenComponent}
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
      CommonModule,
      ForbiddenModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
