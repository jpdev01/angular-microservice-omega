import { ResponsePageable } from './../model/responsePageable.model';
import { Utils } from './../utils/Utils.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpClient: HttpClient, private utils: Utils) { }

  public getCustomers(): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.utils.getApiUrl() + '/customers');
  }

  public getCustomer(id: number): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.utils.getApiUrl()  + '/customer' + '?id=' + id);
  }

}
