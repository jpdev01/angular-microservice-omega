import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestParam } from '../../utils/request-param.model';
import { Utils } from '../../utils/Utils.model';
import { PortalUtil } from '../PortalUtil.service';

@Injectable({
  providedIn: 'root'
})
export class ListApiService {
  apiUrl: string;
  httpOptions: {};
  options: any;
  filter: any;

  constructor(private httpClient: HttpClient, private utils: Utils) {
    this.apiUrl = PortalUtil.getApiUrl();
    this.httpOptions = PortalUtil.getHttpOptions();
  }

  public get(component: string): Observable<any> {
    if (this.options){
      let params = [];
      if(this.options.reduced){
        params = PortalUtil.addRequestParam(new RequestParam({
          key: 'reduced', value: this.options.reduced
        }), params);
      }
      if (this.options.input){
        params = PortalUtil.addRequestParam(new RequestParam({
          key: 'input', value: this.options.input
        }), params);
      }
      let uri = PortalUtil.buildRequestParam(params);
      return this.httpClient.get<any>(this.apiUrl  + "/" + component + '/list/build' + uri, this.httpOptions);
    }

    if(this.filter){
      PortalUtil.setParam(this.filter);
      this.httpOptions = PortalUtil.getHttpOptions();
    }
    return this.httpClient.get<any>(this.apiUrl  + "/" + component + '/list/build', this.httpOptions);
  }


  public setFilter(filter: any): void{
    this.filter = filter;
    this.filter = new HttpParams({
      fromObject: {
        filter
      }
    });
    this.filter.append(filter.name, filter.value);
  }

  public setOptions(options): void{
    this.options = options;
  }

}
