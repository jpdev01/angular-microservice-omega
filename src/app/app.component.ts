import { Router } from '@angular/router';
import { Utils } from './main/shared/utils/Utils.model';
import { UserService } from './main/shared/service/user.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './main/shared/service/auth.service';
import { ToastNotificationService } from './main/shared/service/toast-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Neusa Moda';

  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit() {
    if (this.authService.isLoged()){
      this.router.navigate(['home']);
    }
  }

  onLogout(){
    this.authService.logout();
  }

}

