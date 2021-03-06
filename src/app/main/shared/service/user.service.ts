import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';
import { Utils } from '../utils/Utils.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // utils: Utils;
  apiUrl: string = "localhost:8080/neusamoda";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };


  constructor(
    private httpClient: HttpClient
  ) { }

  public getUsers(): Observable<ResponsePageable> {
    // aqui é feita a requisição
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '/users');
  }

  public getUser(id: number): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '/user' + '?id=' + id);
  }

  public validateLogin(user: any): Observable<User> {
    debugger;
    return this.httpClient.post<any>(this.apiUrl + '/user/login', user, this.httpOptions);
  }

}
