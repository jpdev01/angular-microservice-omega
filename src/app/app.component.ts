import { Utils } from './main/shared/utils/Utils.model';
import { UserService } from './main/shared/service/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Neusa Moda';

  constructor(private service : UserService, public utils: Utils){}

  teste(): void{
    console.log(this.utils.getLogin());
  }

  // @Input('userIsLogged') userIsLogged : boolean;
  userIsLogged = false;
  // userIsLogged = this.service.userIsLoged();


}
