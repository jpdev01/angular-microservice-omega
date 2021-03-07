import { BehaviorSubject } from 'rxjs';
export class Login {

  private musicaServiceBehaviorSubject = new BehaviorSubject<boolean>(false);

  public login(): void {
    this.musicaServiceBehaviorSubject.next(true);
  }

  public logout(): void {
    this.musicaServiceBehaviorSubject.next(false);
  }

  public isLogin() {
    return this.musicaServiceBehaviorSubject;
  }

}
