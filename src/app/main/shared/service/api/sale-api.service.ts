import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ServiceApiInterface } from "../../interface/service-api.interface";
import { Utils } from "../../utils/Utils.model";
import { Sale } from '../../model/sale.model';
import { PortalUtil } from "../PortalUtil.service";

@Injectable({
  providedIn: 'root'
})
export class SaleApiService implements ServiceApiInterface{
  apiUrl: string;
  httpOptions: object;

  constructor(private httpClient: HttpClient, private utils: Utils) {
      this.apiUrl = PortalUtil.getApiUrl();
      this.httpOptions = PortalUtil.getHttpOptions();
  }

  public getAll(): Observable<Sale> {
    return this.httpClient.get<Sale>(this.apiUrl + '/sale', this.httpOptions);
  }

  public getById(id: number): Observable<Sale> {
    return this.httpClient.get<Sale>(this.apiUrl + '/sale/' + id, this.httpOptions);
  }

  public save(sale: Sale): Observable<Sale> {
    return this.httpClient.post<any>(this.apiUrl + '/sale/save', sale, this.httpOptions);
  }
}
