import { Category } from '../../model/category.model';
import { ResponsePageable } from '../../model/responsePageable.model';
import { Observable } from 'rxjs';
import { Utils } from '../../utils/Utils.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ServiceApiInterface } from '../../interface/service-api.interface';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService implements ServiceApiInterface {

  httpOptions: object;
  apiUrl: string;

  constructor(private utils: Utils, private httpClient: HttpClient) {
    this.httpOptions = this.utils.getHttpOptions();
    this.apiUrl = this.utils.getApiUrl();
   }

   public save(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiUrl + '/product/save', product, this.httpOptions);
  }

  public getAll(): Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.apiUrl   + '/product', this.httpOptions);
  }

  public getById(id: number): Observable<Product>{
    return this.httpClient.get<Product>(this.apiUrl + '/product/' + id, this.httpOptions);
  }

  public getByCode(code: string): Observable<Product>{
  return this.httpClient.get<Product>(this.apiUrl + '/product/code' + code, this.httpOptions);
  }

  public getAllFromCategory(category: Category): Observable<Product>{
    return this.httpClient.get<Product>(this.apiUrl + '/product/category/' + category.id, this.httpOptions);
  }


}