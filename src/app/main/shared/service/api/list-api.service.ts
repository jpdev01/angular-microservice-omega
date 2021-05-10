import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestParam } from '../../utils/request-param.model';
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
    if (this.options){
      let params = [];
      if(this.options.reduced){
        params = this.utils.addRequestParam(new RequestParam({
          key: 'reduced', value: this.options.reduced
        }), params);
      }
      if (this.options.radio){
        params = this.utils.addRequestParam(new RequestParam({
          key: 'radio', value: this.options.radio
        }), params);
      }
      let uri = this.utils.buildRequestParam(params);
      return this.httpClient.get<any>(this.apiUrl  + "/" + component + '/list/build' + uri, this.httpOptions);
    }
    return this.httpClient.get<any>(this.apiUrl  + "/" + component + '/list/build', this.httpOptions);
  }

  public setOptions(options): void{
    this.options = options;
  }

}
