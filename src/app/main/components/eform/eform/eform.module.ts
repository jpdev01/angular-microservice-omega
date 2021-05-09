import { Utils } from './../../../shared/utils/Utils.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EformComponent } from './eform.component';
import { HeaderModule } from '../header/header.module';
import { PipeModule } from 'src/app/main/shared/pipe/pipe/pipe.module';
import { NgxMaskModule } from 'ngx-mask';
import {ListModule} from '../../list/list/list.module';
import {ModalModule} from '../../modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    PipeModule,
    NgxMaskModule.forRoot(),
    ListModule,
    ModalModule
  ],
  declarations: [EformComponent], exports: [EformComponent], providers: [Utils]
})
export class EformModule { }
