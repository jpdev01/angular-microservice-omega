import { Eform } from '../../model/form/EForm.model';
import { Utils } from '../../utils/Utils.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EformApiService {

  apiUrl: string;
  httpOptions: object;

  constructor(private httpClient: HttpClient, private utils: Utils) {
    this.apiUrl = this.utils.getApiUrl();
    this.httpOptions = this.utils.getHttpOptions();
  }

  public get(url: String): Observable<Eform> {
    return this.httpClient.get<Eform>(this.apiUrl  + "/" + url, this.httpOptions);
  }

}
