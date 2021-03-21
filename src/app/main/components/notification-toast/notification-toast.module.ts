import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationToastComponent } from './notification-toast.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotificationToastComponent],
  exports: [NotificationToastComponent]
})
export class NotificationToastModule { }
