import { UserInfoComponent } from './user-info/user-info.component';
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
import { NavbarListModule } from 'src/app/main/components/navbar-list/navbar-list.module';
import { FrmCadModule } from 'src/app/main/components/frm-cad/frm-cad.module';
import { FrmCadComponent } from 'src/app/main/components/frm-cad/frm-cad.component';
import { UserApiService } from 'src/app/main/shared/service/user-api.service';
import {ListEntityModule} from 'src/app/main/components/list-entity/list-entity.module';
import {EntityInfoModule} from 'src/app/main/components/entity-info/entity-info.module';

@NgModule({
  declarations: [UsersComponent, UsersListComponent, UserFrmComponent, UserInfoComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    PipeModule,
    ReactiveFormsModule,
    NavbarListModule,
    FrmCadModule,
    ListEntityModule,
    EntityInfoModule
  ],
  providers: [FormBuilder, Utils, UserService, UserApiService],
  exports: [UsersComponent]
})
export class UsersModule { }
