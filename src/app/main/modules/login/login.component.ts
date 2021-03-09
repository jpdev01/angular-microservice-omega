
import { UserService } from '../../shared/service/user.service';
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
    ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      login: [''],
      password: ['']
    });
    this.invalidLogin = false;
    this.utils = new Utils();
  }

  validateLogin(): void {
    this.rest.validateLogin(this.formLogin.value).subscribe(
      (resultSuccess) => {
        debugger;
        // this.service.login();
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

}
