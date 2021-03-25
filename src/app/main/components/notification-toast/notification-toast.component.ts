import { Component, OnInit } from '@angular/core';
import { ToastNotificationService } from '../../shared/service/toast-notification.service';

@Component({
  selector: 'app-notification-toast',
  templateUrl: './notification-toast.component.html',
  styleUrls: ['./notification-toast.component.css']
})
export class NotificationToastComponent implements OnInit {

  constructor(public toastService: ToastNotificationService) { }

  ngOnInit() {
    this.getInterfaceRule();
  }

  private getInterfaceRule(): void {
    this.toastService.interfaceRuleEmitter.subscribe(
      (params) => {

      }
    );
  }

}
