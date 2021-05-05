import { IconNavbar } from './../../model/icon-navbar.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from '../../utils/Utils.model';

@Injectable({
  providedIn: 'root'
})
export class NavbarApiService {
  apiUrl: string;
  httpOptions: object;

  constructor(private httpClient: HttpClient, private utils: Utils) {
    this.apiUrl = this.utils.getApiUrl();
    this.httpOptions = this.utils.getHttpOptions();
  }

  public get(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl  + "/nav/navbar", this.httpOptions);
  }

}