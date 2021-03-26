import { ToastNotificationService } from './../../shared/service/toast-notification.service';
import { Component, OnInit } from '@angular/core';
import { Utils } from '../../shared/utils/Utils.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public notification: any;

  constructor(public utils: Utils, private toastService: ToastNotificationService) {
   }

  ngOnInit(): void {
    this.utils = new Utils();
    this.getInterfaceRule();
    this.getSubject();
    this.utils.interfaceRuleEmitter.subscribe((toast) => {
      console.log("recebeu o toast" + toast);
    })
  }

  private getInterfaceRule(): void {
    ToastNotificationService.interfaceRuleEmitter.subscribe(
      (toast) => {
        console.log("recebeu o toast em home?" + toast);
        this.notification = toast;
      }
    );
  }

  private getSubject(){
    this.toastService.getToast().subscribe(toast => {
      console.log("boa! Recebeu o toast: " + toast);
      this.notification = toast;
      debugger;
    })
  }



}
