import { Provider } from './../../model/provider.model';
import { Utils } from './../../utils/Utils.model';
import { ResponsePageable } from './../../model/responsePageable.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceApiInterface } from "../../interface/service-api.interface";
import { PortalUtil } from '../PortalUtil.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderApiService implements ServiceApiInterface {
  apiUrl: string;
  httpOptions: object;

  constructor(private httpClient: HttpClient, private utils: Utils) {
      this.apiUrl = PortalUtil.getApiUrl();
      this.httpOptions = PortalUtil.getHttpOptions();
  }

  public getAll(): Observable<ResponsePageable> {
      return this.httpClient.get<ResponsePageable>(this.apiUrl + '/provider', this.httpOptions);
  }

  public getById(id: number): Observable<Provider> {
      return this.httpClient.get<Provider>(this.apiUrl + '/provider/' + id, this.httpOptions);
  }

  public save(category: Provider): Observable<Provider> {
      return this.httpClient.post<any>(this.apiUrl + '/provider/save', category, this.httpOptions);
  }
}
