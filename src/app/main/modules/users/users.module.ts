import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import {UsersNavbarComponent} from './users-navbar/users-navbar.component';
import { PipeModule } from '../../shared/pipe/pipe/pipe.module';
import { UserFrmComponent } from './user-frm/user-frm.component';
import { Router } from '@angular/router';


@NgModule({
  declarations: [UsersComponent, UsersNavbarComponent, UsersListComponent, UserFrmComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    PipeModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder],
  exports: [UsersComponent]
})
export class UsersModule { }
