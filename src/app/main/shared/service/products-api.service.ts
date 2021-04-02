import { ResponsePageable } from './../model/responsePageable.model';
import { Observable } from 'rxjs';
import { Utils } from './../utils/Utils.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceApiInterface } from '../interface/service-api.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService implements ServiceApiInterface {

  httpOptions;
  apiUrl: string;

  constructor(private utils: Utils, private httpClient: HttpClient) {
    this.httpOptions = this.utils.getHttpOptions();
    this.apiUrl = this.utils.getApiUrl();
   }
   
  save(): void {
    throw new Error('Method not implemented.');
  }

  public getAll(): Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.apiUrl   + '/product');
  }

  public getById(): Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '/product');
  }


}
