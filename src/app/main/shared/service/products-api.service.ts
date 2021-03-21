import { ResponsePageable } from './../model/responsePageable.model';
import { Observable } from 'rxjs';
import { Utils } from './../utils/Utils.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private utils: Utils, private httpClient: HttpClient) { }

  public getProducts(): Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.utils.getApiUrl() + '/product');
  }

  public getProductById(): Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.utils.getApiUrl() + '/product');
  }


}
