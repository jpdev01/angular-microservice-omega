import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {ServiceApiInterface} from '../../interface/service-api.interface';
import { ProvisionalSale } from '../../model/provisional-sale.model';
import { Utils } from '../../utils/Utils.model';
import { PortalUtil } from '../PortalUtil.service';

@Injectable({
  providedIn: 'root'
})
export class ProvisionalSaleApiService implements ServiceApiInterface {
  apiUrl: string;
  httpOptions: object;

  constructor(private httpClient: HttpClient, private utils: Utils) {
      this.apiUrl = PortalUtil.getApiUrl();
      this.httpOptions = this.utils.getHttpOptions();
  }

  public getAll(): Observable<ProvisionalSale> {
    return this.httpClient.get<ProvisionalSale>(this.apiUrl + '/provisionalSale', this.httpOptions);
  }

  public getById(id: number): Observable<ProvisionalSale> {
    debugger;
    return this.httpClient.get<ProvisionalSale>(this.apiUrl + '/provisionalSale/' + id, this.httpOptions);
  }

  public save(provisionalSale: ProvisionalSale): Observable<ProvisionalSale> {
    return this.httpClient.post<any>(this.apiUrl + '/provisionalSale/save', provisionalSale, this.httpOptions);
  }
}
