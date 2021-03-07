import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

// @Injectable()
export class Utils {

  apiUrl: string = "localhost:8080/neusamoda";
  private loginServiceBehaviorSubject = new BehaviorSubject<boolean>(false);

  constructor() { }

  login(): void{
    this.loginServiceBehaviorSubject.next(true);
  }

  logout():void {
    this.loginServiceBehaviorSubject.next(false);
  }

  getApiUrl(): string {
    return this.apiUrl;
  }

  public getLogin(): boolean {
    return this.loginServiceBehaviorSubject.value;
  }
}
