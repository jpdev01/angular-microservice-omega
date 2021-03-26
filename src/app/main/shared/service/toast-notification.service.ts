import { ToastNotification } from './../model/toast-notification.model';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// declare var $:any;

// @Injectable({
//   providedIn: 'root'
// })
export class ToastNotificationService {

  toast;
  static interfaceRuleEmitter = new EventEmitter<ToastNotification>();

  constructor(){}

  public init() {

  }

  getToast() {
    return ToastNotificationService.interfaceRuleEmitter;
  }

  emitToast(toast: ToastNotification){
    ToastNotificationService.interfaceRuleEmitter.emit(toast);
  }

  public show(): void {
    ToastNotificationService.interfaceRuleEmitter.emit(this.toast);
  }

  public create(options: {
    text?: string;
    title?: string;
    labelTime?: string;
  } = {}) {
    debugger;
    this.toast = new ToastNotification(options);
    ToastNotificationService.interfaceRuleEmitter.emit(this.toast);

    var show = () => {
      this.show();
    }
  }

}
