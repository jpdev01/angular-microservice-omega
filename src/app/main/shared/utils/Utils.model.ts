import { HttpHeaders, HttpParams } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Subject } from 'rxjs';
import { ToastNotification } from "../model/toast-notification.model";
import { RequestParam } from './request-param.model';

// @Injectable()
export class Utils {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': `Bearer ` + this.getToken()
    }),
    params: new HttpParams().append("category", "1")
  };

  constructor() { }

  public addParam(param: {
    key?: string; 
    value?: string;
  } = {}): void{
    this.httpOptions.params.append(param.key, param.value);
  }

  public setParam(param: HttpParams): void{
    this.httpOptions.params = param;
  }

  public getHttpOptions(): object {
    return this.httpOptions;
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  addRequestParam(newParam: RequestParam, params: RequestParam[]): RequestParam[]{
    if (!params) {
      params  = [];
    }
    params.push(newParam);
    return params;
  }

  buildRequestParam(params: RequestParam[]): string{
    let uri = "";
    if(params){
      uri = "?";
      params.forEach(param => {
        let index = params.indexOf(param);
        let isInitialOrLatest = index == 0 || index == params.length;
        if (!isInitialOrLatest){
          uri += "&";
        }
        uri += param.key;
        uri += "=";
        uri += param.value;
      });
    }
    return uri;
  }

}
