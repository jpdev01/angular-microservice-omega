import { ToastNotification } from './../model/toast-notification.model';
import { EventEmitter, Injectable } from '@angular/core';

declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class ToastNotificationService {

  interfaceRuleEmitter = new EventEmitter<any>();
  options;

  constructor(options: {
    text?: string;
    title?: string;
    labelTime?: string;
  } = {}) {
    debugger;
    this.options = options;
  }

  public show(): void {
    $('.toast').toast('show');
    let toast = new ToastNotification()
    this.interfaceRuleEmitter.emit(this.options);
  }

}
