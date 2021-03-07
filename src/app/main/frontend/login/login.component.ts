import { UserService } from './../../shared/service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/model/user.model';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin;
  public invalidLogin = false;

  constructor(
    private fb: FormBuilder,
    private rest: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      login: [''],
      password: ['']
    });
    this.invalidLogin = false;
  }

  validateLogin(): void {
    this.rest.validateLogin(this.formLogin.value).subscribe(
      (resultSuccess) => {
        // window.
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
