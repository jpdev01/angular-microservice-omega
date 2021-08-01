import { Eform } from '../../model/form/EForm.model';
import { Utils } from '../../utils/Utils.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { PortalUtil } from '../PortalUtil.service';

@Injectable({
  providedIn: 'root'
})
export class EformApiService {
  apiUrl: string;
  httpOptions: object;

  constructor(private httpClient: HttpClient, private utils: Utils) {
    this.apiUrl = PortalUtil.getApiUrl();
    this.httpOptions = PortalUtil.getHttpOptions();
  }

  public get(url: String): Observable<Eform> {
    return this.httpClient.get<Eform>(this.apiUrl  + "/" + url, this.httpOptions);
  }

  public getWithId(url: string, id: number | string){
    return this.httpClient.get<Eform>(this.apiUrl  + "/" + url + "/" + id, this.httpOptions);
  }

}
