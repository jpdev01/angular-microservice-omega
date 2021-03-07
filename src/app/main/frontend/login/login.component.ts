import { UserService } from './../../shared/service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/model/user.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin;
  invalidLogin = false;

  constructor(
    private fb: FormBuilder,
    private rest: UserService
    ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      login: [''],
      password: ['']
    })
  }

  validateLogin(): void {
    this.rest.validateLogin(this.formLogin.value).subscribe(
      (resultSuccess) => {
      console.log(resultSuccess);
    },
    (resultError) => {
      if (resultError.status == '403') {
        //acesso negado!
        // this.dialogRef.close();
        this.formLogin.reset();
        this.invalidLogin = true;
      }
    });
    debugger;
  }

}
