import { HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { RequestParam } from '../utils/request-param.model';

@Injectable({
  providedIn: 'root'
})
export class PortalUtil {

    static baseUrl: string;
    private static apiUrl: string = "http://localhost:8080/neusamoda";
    private static httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ` + PortalUtil.getToken()
        }),
        params: new HttpParams().append("category", "1")
    };
    static icoms = new EventEmitter<any>();

    constructor() {
        PortalUtil.baseUrl = window.location.origin;
    }

  static getApiUrl(): string{
      return this.apiUrl;
  }


  public static addParam(param: {
    key?: string; 
    value?: string;
  } = {}): void{
    PortalUtil.httpOptions.params.append(param.key, param.value);
  }

  public static setParam(param: HttpParams): void{
    PortalUtil.httpOptions.params = param;
  }

  static setToken(newToken: string): void{
      //PortalUtil.setToken(newToken);
      PortalUtil.httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ` + newToken
        }),
        params: new HttpParams().append("category", "1")
    };
  }

  public static getHttpOptions(): { headers: HttpHeaders; } {
    return PortalUtil.httpOptions;
  }

  static getToken() {
    return localStorage.getItem('access_token');
  }

  static removeToken(){
      localStorage.removeItem('access_token');
  }

  static addRequestParam(newParam: RequestParam, params: RequestParam[]): RequestParam[]{
    if (!params) {
      params  = [];
    }
    params.push(newParam);
    return params;
  }

  static buildRequestParam(params: RequestParam[]): string{
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
