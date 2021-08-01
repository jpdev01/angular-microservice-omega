import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortalUtil {

  static baseUrl: string;
  private static apiUrl: string = "http://localhost:8080/neusamoda";
  static icoms = new EventEmitter<any>();

  constructor() { 
      PortalUtil.baseUrl = window.location.origin;
  }

  static getApiUrl(): string{
      return this.apiUrl;
  }
}
