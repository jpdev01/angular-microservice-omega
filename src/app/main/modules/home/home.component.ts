import { NavbarService } from './../../shared/service/navbar.service';
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
  navbarShow = true;

  constructor(public utils: Utils, private toastService: ToastNotificationService, private navbarService: NavbarService) {
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
    // this.navbarService.interfaceRuleEmitter.subscribe(
    //   (interfaceRule) => {
    //     if (interfaceRule.element === 'navbar') {
    //       if (interfaceRule.show == true) {
    //         this.navbarShow = true;
    //       } else {
    //         this.navbarShow = false;
    //       }
    //     }
    //   }
    // );
  }

  private closeNotification(): void{
    ToastNotificationService.interfaceRuleEmitter.emit(undefined);
    this.notification = undefined;
  }

}
