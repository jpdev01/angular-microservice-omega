import { HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Subject } from 'rxjs';
import { ToastNotification } from "../model/toast-notification.model";

// @Injectable()
export class Utils {

  private apiUrl: string = "http://localhost:8080/neusamoda";
  interfaceRuleEmitter = new EventEmitter<ToastNotification>();
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor() { }

  public getApiUrl(): string {
    return this.apiUrl;
  }

  public getHttpOptions(): object {
    return this.httpOptions;
  }

  // filter!
  emitterFilterChange = new EventEmitter<string>();

  




}
