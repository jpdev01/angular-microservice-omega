import { UserService } from '../../../shared/service/user.service';
import { Utils } from '../../../shared/utils/Utils.model';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { PipeModule } from '../../../shared/pipe/pipe/pipe.module';
import { UserFrmComponent } from './user-frm/user-frm.component';
import { NavbarSecundaryModule } from 'src/app/main/components/navbar-secundary/navbar-secundary.module';
import { NavbarSecundaryComponent } from 'src/app/main/components/navbar-secundary/navbar-secundary.component';


@NgModule({
  declarations: [UsersComponent, UsersListComponent, UserFrmComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    PipeModule,
    ReactiveFormsModule,
    NavbarSecundaryModule
  ],
  providers: [FormBuilder, Utils, UserService, NavbarSecundaryComponent],
  exports: [UsersComponent]
})
export class UsersModule { }
