import { Utils } from './../utils/Utils.model';
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

  constructor(private httpClient: HttpClient, private utils: Utils) { }


  private loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  public isLoged(): boolean {
    return this.utils.getToken() != undefined;
  }

  login(){
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
  }

  public validateLogin(user: any): Observable<User> {
    return this.httpClient.post<any>(this.apiUrl + '/auth/login', user, this.httpOptions);
  }

  public tokenAvailable(): boolean {
    return !!localStorage.getItem('access_token');
  }
}
