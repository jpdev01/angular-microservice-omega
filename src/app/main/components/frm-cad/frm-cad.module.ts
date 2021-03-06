import { PipeModule } from 'src/app/main/shared/pipe/pipe/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrmCadComponent } from './frm-cad.component';
import { EnumKeyPipe } from '../../shared/pipe/enum-filter-key.pipe';
import { ToastNotificationService } from '../../shared/service/toast-notification.service';
import { Utils } from '../../shared/utils/Utils.model';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {FrmGroupComponent} from 'src/app/main/components/frm-cad/frm-group/frm-group.component';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    ModalModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [FrmCadComponent, FrmGroupComponent],
  exports: [FrmCadComponent],
  providers: [EnumKeyPipe, ToastNotificationService, Utils]
})
export class FrmCadModule { }
