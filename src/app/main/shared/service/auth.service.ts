import { User } from './../model/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  apiUrl= "http://localhost:8080/neusamoda";

  constructor(private httpClient: HttpClient) { }


  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }


  login(){
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
  }

  public validateLogin(user: any): Observable<User> {
    debugger;
    this.login();
    return this.httpClient.post<any>(this.apiUrl + '/user/login', user, this.httpOptions);
  }
}
