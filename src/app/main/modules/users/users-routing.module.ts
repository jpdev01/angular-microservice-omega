import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users.component';
import {UserInfoComponent} from './user-info/user-info.component';

const routes: Routes = [
  { path: '', component: UsersComponent,
  children: [{
    path: '', component: UsersListComponent
  },
  {
    path: 'test', component: UsersListComponent
  }
  ] },
  {
    path: ':id', component: UserInfoComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
