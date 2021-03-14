import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import {UsersNavbarComponent} from './users-navbar/users-navbar.component';
import { PipeModule } from '../../shared/pipe/pipe/pipe.module';


@NgModule({
  declarations: [UsersComponent, UsersNavbarComponent, UsersListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    PipeModule
  ],
  providers: [],
  exports: [UsersComponent]
})
export class UsersModule { }
