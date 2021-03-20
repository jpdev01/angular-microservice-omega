import { EventEmitter, Injectable } from '@angular/core';
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
  apiUrl: string = "http://localhost:8080/neusamoda";
  isLoged = false;
  interfaceRuleEmitter = new EventEmitter<any>();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(
    private httpClient: HttpClient
  ) { }

  public getUsers(): Observable<ResponsePageable> {
    debugger;
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '/user');
  }

  public getUser(id: number): Observable<ResponsePageable> {
    debugger;
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '/user/' + id);
  }

  public interfaceRule(name: string, show: boolean) {

  }
}
