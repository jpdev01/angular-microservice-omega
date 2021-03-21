import { HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Subject } from 'rxjs';

// @Injectable()
export class Utils {

  apiUrl: string = "http://localhost:8080/neusamoda";

  constructor() { }

  getApiUrl(): string {
    return this.apiUrl;
  }

  // filter!
  emitterFilterChange = new EventEmitter<string>();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };



}
