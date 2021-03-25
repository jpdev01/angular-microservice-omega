import { Component, OnInit } from '@angular/core';
import { ToastNotification } from '../../shared/model/toast-notification.model';
import { ToastNotificationService } from '../../shared/service/toast-notification.service';

@Component({
  selector: 'app-notification-toast',
  templateUrl: './notification-toast.component.html',
  styleUrls: ['./notification-toast.component.css']
})
export class NotificationToastComponent implements OnInit {

  element: ToastNotification;

  constructor(public toastService: ToastNotificationService) { }

  ngOnInit() {
    this.getInterfaceRule();
    this.getSubject();
  }

  private getInterfaceRule(): void {
    this.toastService.interfaceRuleEmitter.subscribe(
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
