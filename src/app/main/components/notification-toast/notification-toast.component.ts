import { Utils } from 'src/app/main/shared/utils/Utils.model';
import { Component, Input, OnInit } from '@angular/core';
import { ToastNotification } from '../../shared/model/toast-notification.model';
import { ToastNotificationService } from '../../shared/service/toast-notification.service';

@Component({
  selector: 'app-notification-toast',
  templateUrl: './notification-toast.component.html',
  styleUrls: ['./notification-toast.component.css']
})
export class NotificationToastComponent implements OnInit {

  element: ToastNotification;
  @Input() notification;

  constructor(public toastService: ToastNotificationService, private utils: Utils) { }

  ngOnInit() {
    this.getInterfaceRule();
    this.getSubject();
    this.utils.interfaceRuleEmitter.subscribe((toast: ToastNotification) => console.log("asssssssssss" + toast));
  }

  private getInterfaceRule(): void {
    ToastNotificationService.interfaceRuleEmitter.subscribe(
      (toast) => {
        this.element = toast;
      }
    );
  }

  getSubject(){
    this.toastService.getToast().subscribe(toast => {
      console.log("boa! Recebeu o toast: " + toast);
      debugger;
    })
  }


}
