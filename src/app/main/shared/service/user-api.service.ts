import { Permission } from 'src/app/main/shared/enum/permission.enum';
import { User } from './../model/user.model';
import { Utils } from './../utils/Utils.model';
import { ResponsePageable } from './../model/responsePageable.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceApiInterface } from '../interface/service-api.interface';

@Injectable({
  providedIn: 'root'
})
export class UserApiService implements ServiceApiInterface {

  apiUrl: string;
  httpOptions: object;

  constructor(private httpClient: HttpClient, private utils: Utils) {
    this.apiUrl = this.utils.getApiUrl();
    this.httpOptions = this.utils.getHttpOptions();
   }

  ngOnInit(): void {
    // this.apiUrl = this.utils.getApiUrl();
    // this.httpOptions = this.utils.getHttpOptions();
  }

  public getAll(): Observable<ResponsePageable> {
    debugger;
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '/user', this.httpOptions);
  }

  public getById(id: number): Observable<User> {
    debugger;
    return this.httpClient.get<User>(this.apiUrl + '/user/' + id, this.httpOptions);
  }

  public save(user: User): Observable<User> {
    return this.httpClient.post<any>(this.apiUrl + '/user/save', user, this.httpOptions);
  }

}
