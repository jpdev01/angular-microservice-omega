import { Utils } from 'src/app/main/shared/utils/Utils.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationToastComponent } from './notification-toast.component';
import {ToastNotificationService } from '../../shared/service/toast-notification.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotificationToastComponent],
  exports: [NotificationToastComponent],
  providers: [ToastNotificationService, Utils]
})
export class NotificationToastModule { }
