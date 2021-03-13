import { User } from './../model/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  developerEnvironment = true;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };


  constructor(private httpClient: HttpClient) { }

  isDeveloper(): boolean{
    return this.developerEnvironment;
  }

}
