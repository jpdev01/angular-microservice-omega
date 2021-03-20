import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users.component';
import {UserInfoComponent} from './user-info/user-info.component';
import { SearchFilterPipe } from '../../shared/pipe/search-filter.pipe';
import {UserFrmComponent} from './user-frm/user-frm.component';

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    children: [
      { path: '', component: UsersListComponent },
      { path: 'info/:id', component: UserInfoComponent },
      { path: 'edit', component: UserFrmComponent },
      { path: 'edit/:id', component: UserFrmComponent }
    ]
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
