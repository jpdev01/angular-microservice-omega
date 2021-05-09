import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from '../../utils/Utils.model';

@Injectable({
  providedIn: 'root'
})
export class ListApiService {
  apiUrl: string;
  httpOptions: object;
  options: any;

  constructor(private httpClient: HttpClient, private utils: Utils) {
    this.apiUrl = this.utils.getApiUrl();
    this.httpOptions = this.utils.getHttpOptions();
  }

  public get(component: string): Observable<any> {
    if (this.options && this.options.reduced){
      return this.httpClient.get<any>(this.apiUrl  + "/" + component + '/list/build?reduced=true', this.httpOptions);
    }
    return this.httpClient.get<any>(this.apiUrl  + "/" + component + '/list/build', this.httpOptions);
  }

  public setOptions(options): void{
    this.options = options;
  }

}
