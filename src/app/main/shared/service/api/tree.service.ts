import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Utils } from "../../utils/Utils.model";

@Injectable({
  providedIn: 'root'
})
export class TreeService{
  apiUrl: string;
  httpOptions: object;

//   constructor(private httpClient: HttpClient, private utils: Utils) {
//       this.apiUrl = this.utils.getApiUrl();
//       this.httpOptions = this.utils.getHttpOptions();
//   }

//   public getAll(): Observable<Tree> {
//     return this.httpClient.get<Sale>(this.apiUrl + '/sale', this.httpOptions);
//   }

//   public getById(id: number): Observable<Sale> {
//     return this.httpClient.get<Sale>(this.apiUrl + '/sale/' + id, this.httpOptions);
//   }

//   public save(sale: Sale): Observable<Sale> {
//     return this.httpClient.post<any>(this.apiUrl + '/sale/save', sale, this.httpOptions);
//   }
}
