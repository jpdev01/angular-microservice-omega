import { IconNavbar } from './../../model/icon-navbar.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from '../../utils/Utils.model';
import { PortalUtil } from '../PortalUtil.service';

@Injectable({
  providedIn: 'root'
})
export class RestEngineService {
  apiUrl: string;
  httpOptions: object;

  constructor(private httpClient: HttpClient, private utils: Utils) {
    this.apiUrl = PortalUtil.getApiUrl();
    this.httpOptions = this.utils.getHttpOptions();
  }

  public getCustom(url: string): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + '/' + url, this.httpOptions);
  }

}
