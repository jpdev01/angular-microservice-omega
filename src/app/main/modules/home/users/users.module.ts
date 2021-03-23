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
import { FrmCadModule } from 'src/app/main/components/frm-cad/frm-cad.module';
import { FrmCadComponent } from 'src/app/main/components/frm-cad/frm-cad.component';
import { UserApiService } from 'src/app/main/shared/service/user-api.service';
import {EnumUtils } from 'src/app/main/shared/utils/enum-utils.model';


@NgModule({
  declarations: [UsersComponent, UsersListComponent, UserFrmComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    PipeModule,
    ReactiveFormsModule,
    NavbarSecundaryModule,
    FrmCadModule
  ],
  providers: [FormBuilder, Utils, UserService, UserApiService, NavbarSecundaryComponent, FrmCadComponent, EnumUtils],
  exports: [UsersComponent]
})
export class UsersModule { }
