
import { UserService } from '../../shared/service/user.service';
import { AuthService } from '../../shared/service/auth.service';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Utils } from '../../shared/utils/Utils.model';

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
    ) { }

  ngOnInit(): void {
    this.validateIsLogged();
    this.formLogin = this.fb.group({
      login: [''],
      password: ['']
    });
    this.invalidLogin = false;
    this.utils = new Utils();
  }

  validateLogin(): void {
    this.authService.validateLogin(this.formLogin.value).subscribe(
      (resultSuccess) => {
        debugger;
        this.authService.login();
        this.userIsLogged = true;
        this.redirectToHome();
    },
    (resultError) => {
      if (resultError.status == '403') {
        //acesso negado!
        // this.dialogRef.close();
        this.formLogin.reset();
        this.invalidLogin = true;

      }
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
