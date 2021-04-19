import { ResponsePageable } from '../model/responsePageable.model';
import { Utils } from '../utils/Utils.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer.model';
import { ServiceApiInterface } from '../interface/service-api.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomersApiService implements ServiceApiInterface {

  apiUrl: string;
  httpOptions: object;

  constructor(private httpClient: HttpClient, private utils: Utils) {
    this.apiUrl = this.utils.getApiUrl();
    this.httpOptions = this.utils.getHttpOptions();
  }
  getById(id: Number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.apiUrl  + '/customer/' + id);
  }
  getAll(): Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '/customer', this.httpOptions);
  }
  public save(customer: Customer): Observable<Customer> {
    return this.httpClient.post<any>(this.apiUrl + '/customer/save', customer, this.httpOptions);
  }

}
