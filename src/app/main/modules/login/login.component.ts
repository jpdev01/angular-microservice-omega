
import { UserService } from '../../shared/service/user.service';
import { AuthService } from '../../shared/service/auth.service';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Utils } from '../../shared/utils/Utils.model';
import { PortalUtil } from '../../shared/service/PortalUtil.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin;
  userIsLogged = false;
  public invalidLogin = false;
  public utils: Utils

  // eventEmitter = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private rest: UserService,
    private router: Router,
    private service: UserService,
    private authService : AuthService
    ) {
      //    this.validateIsLogged();
    }

  ngOnInit(): void {
    if (this.authService.tokenAvailable()) {
      this.redirectToHome();
    }
    this.formLogin = this.fb.group({
      login: [''],
      password: ['']
    });
    this.invalidLogin = false;
    this.utils = new Utils();
  }

  validateLogin(): void {
    this.authService.validateLogin(this.formLogin.value).subscribe(
      (resultSuccess: any) => {
        localStorage.setItem('access_token', resultSuccess.token);
        PortalUtil.setToken(resultSuccess.token);
        this.authService.login();
        this.userIsLogged = true;
        window.setTimeout(()=>{this.redirectToHome()}, 1000)
    },
    (resultError) => {

        this.formLogin.reset();
        this.invalidLogin = true;

    });
  }

  redirectToHome(){
    this.router.navigate(['/home']);
  }

  private validateIsLogged(): void{
    if (this.authService.tokenAvailable()) {
      this.redirectToHome();
    }
  }

}
