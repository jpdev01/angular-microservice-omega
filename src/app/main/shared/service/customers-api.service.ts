import { ResponsePageable } from '../model/responsePageable.model';
import { Utils } from '../utils/Utils.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersApiService {

  apiUrl: string;
  httpOptions: object;

  constructor(private httpClient: HttpClient, private utils: Utils) {
    this.apiUrl = this.utils.getApiUrl();
    this.httpOptions = this.utils.getHttpOptions();
  }

  public getCustomers(): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '/customer');
  }

  public getCustomer(id: number): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl  + '/customer' + '?id=' + id);
  }

  public save(customer: Customer): Observable<Customer> {
    return this.httpClient.post<any>(this.apiUrl + '/customer/save', customer, this.httpOptions);
  }

}
