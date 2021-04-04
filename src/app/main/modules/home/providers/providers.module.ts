import { FrmCadModule } from './../../../components/frm-cad/frm-cad.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidersRoutingModule } from './providers-routing.module';
import { ProvidersComponent } from './providers.component';
import { ProvidersListComponent } from './providers-list/providers-list.component';
import { ListEntityModule } from 'src/app/main/components/list-entity/list-entity.module';
import { ProvidersFrmComponent } from './providers-frm/providers-frm.component';


@NgModule({
  declarations: [ProvidersComponent, ProvidersListComponent, ProvidersFrmComponent],
  imports: [
    CommonModule,
    ProvidersRoutingModule,
    ListEntityModule,
    FormsModule,
    ReactiveFormsModule,
    FrmCadModule
  ]
})
export class ProvidersModule { }
