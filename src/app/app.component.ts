import { Utils } from './main/shared/utils/Utils.model';
import { UserService } from './main/shared/service/user.service';
import { Component } from '@angular/core';
import { Login } from './main/shared/utils/login.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Neusa Moda';
  isLogged = false;
  loginService: Login;

  constructor(private service : UserService){}

  ngOnInit() {
    this.loginService = new Login();
    let teste = this.loginService.isLogin()
      .subscribe(valor => {
        debugger;
        this.isLogged = valor;
      });
  }

}
