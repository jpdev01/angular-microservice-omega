import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent,
  children: [{
    path: '', component: UsersListComponent
  }, {
    path: 'test', component: UsersListComponent
  }
  ] },
  { path: 'list2', component: UsersListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
