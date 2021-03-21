import { User } from './../model/user.model';
import { Utils } from './../utils/Utils.model';
import { ResponsePageable } from './../model/responsePageable.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  apiUrl: string;
  httpOptions: object;

  constructor(private httpClient: HttpClient, private utils: Utils) { }

  ngOnInit(): void {
    this.apiUrl = this.utils.getApiUrl();
    this.httpOptions = this.utils.getHttpOptions();
  }

  public getAll(): Observable<ResponsePageable> {
    debugger;
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '/user');
  }

  public getById(id: number): Observable<ResponsePageable> {
    debugger;
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '/user/' + id);
  }

  public save(user: any): Observable<User> {
    return this.httpClient.post<any>(this.apiUrl + '/user/save', user, this.httpOptions);
  }

}
