import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<ResponsePageable> {
    debugger;
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '/user');
  }

  public getUser(id: number): Observable<ResponsePageable> {
    debugger;
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '/user/' + id);
  }

  public saveUser(user: any): Observable<User> {
    return this.httpClient.post<any>(this.apiUrl + '/user/save', user, this.httpOptions);
  }

}
