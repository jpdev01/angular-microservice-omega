import { ToastNotification } from './../model/toast-notification.model';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class ToastNotificationService {

  toast;

  constructor(){}

  interfaceRuleEmitter = new EventEmitter<any>();
  private toastSubject = new BehaviorSubject<any>(null);

  public init() {
    console.log(this.interfaceRuleEmitter);
  }

  getToast(){
    return this.toastSubject.asObservable();
  }

  setToast(toast: any){
    this.toastSubject.next(toast);
  }

  public show(): void {
    this.interfaceRuleEmitter.emit(this.toast);
    // $('.toast').toast('show');
  }

  public create(options: {
    text?: string;
    title?: string;
    labelTime?: string;
  } = {}) {
    debugger;
    this.toast = new ToastNotification(options);

    // var show = () => {
    //   this.interfaceRuleEmitter.emit(toast);
    // }
  }

}
