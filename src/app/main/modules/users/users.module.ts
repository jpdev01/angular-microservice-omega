import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import {UsersNavbarComponent} from './users-navbar/users-navbar.component';


@NgModule({
  declarations: [UsersComponent, UsersNavbarComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
