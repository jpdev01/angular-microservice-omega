import { ToastNotificationService } from './../../shared/service/toast-notification.service';
import { Component, OnInit } from '@angular/core';
import { Utils } from '../../shared/utils/Utils.model';
import { ToastNotification } from '../../shared/model/toast-notification.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public notification: ToastNotification;

  constructor(public utils: Utils, private toastService: ToastNotificationService) {
   }

  ngOnInit(): void {
    this.utils = new Utils();
    //this.closeNotification();
    this.getInterfaceRule();
  }

  private getInterfaceRule(): void {
    ToastNotificationService.interfaceRuleEmitter.subscribe(
      (toast) => {
        this.notification = toast;
        //setTimeout(() => { this.closeNotification(); }, 3000);
      }
    );
  }

  private closeNotification(): void{
    ToastNotificationService.interfaceRuleEmitter.emit(undefined);
    this.notification = undefined;
  }

}
