import { ToastNotification } from './../model/toast-notification.model';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// declare var $:any;

// @Injectable({
//   providedIn: 'root'
// })
export class ToastNotificationService {

  toast;
  static interfaceRuleEmitter = new EventEmitter<any>();
  static toastSubject = new BehaviorSubject<any>('sd');
  constructor(){}



  public init() {
    console.log(ToastNotificationService.interfaceRuleEmitter);
  }

  getToast(){
    return ToastNotificationService.toastSubject.asObservable();
  }

  setToast(toast: any){
    ToastNotificationService.toastSubject.next(toast);
  }

  public show(): void {
    ToastNotificationService.interfaceRuleEmitter.emit(this.toast);
    // $('.toast').toast('show');
  }

  public create(options: {
    text?: string;
    title?: string;
    labelTime?: string;
  } = {}) {
    debugger;
    this.toast = new ToastNotification(options);
    ToastNotificationService.interfaceRuleEmitter.emit(this.toast);

    // var show = () => {
    //   this.interfaceRuleEmitter.emit(toast);
    // }
  }

}
