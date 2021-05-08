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

  constructor(private httpClient: HttpClient, private utils: Utils) {
    this.apiUrl = this.utils.getApiUrl();
    this.httpOptions = this.utils.getHttpOptions();
  }

  public get(component: string): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl  + "/" + component + '/list/build', this.httpOptions);
  }

}
