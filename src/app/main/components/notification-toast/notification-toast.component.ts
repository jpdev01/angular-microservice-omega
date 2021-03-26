import { Utils } from 'src/app/main/shared/utils/Utils.model';
import { Component, Input, OnInit } from '@angular/core';
import { ToastNotification } from '../../shared/model/toast-notification.model';
import { ToastNotificationService } from '../../shared/service/toast-notification.service';
declare var $:any;

@Component({
  selector: 'app-notification-toast',
  templateUrl: './notification-toast.component.html',
  styleUrls: ['./notification-toast.component.css']
})
export class NotificationToastComponent implements OnInit {

  element: ToastNotification;
  @Input() notification: ToastNotification;

  constructor(public toastService: ToastNotificationService, private utils: Utils) { }

  ngOnInit() {
    if (this.notification){
      $('.toast').toast('show');
    }
  }


}
