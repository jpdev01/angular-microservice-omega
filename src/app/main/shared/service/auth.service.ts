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


  private loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(){
    this.createToken();
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
  }

  public validateLogin(user: any): Observable<User> {
    return this.httpClient.post<any>(this.apiUrl + '/auth/login', user, this.httpOptions);
  }

  public tokenAvailable(): boolean {
    return !!localStorage.getItem('token');
  }

  private createToken(): void {
    localStorage.setItem('token', 'login');
  }
}
