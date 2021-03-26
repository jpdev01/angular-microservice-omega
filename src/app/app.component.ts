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

  constructor(private authService: AuthService, private toastService: ToastNotificationService){}

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.createToastNotification();
  }

  onLogout(){
    this.authService.logout();
  }

  createToastNotification(): void {
    this.toastService.init();
    this.toastService.getToast().subscribe(toast => {
      console.log("boa! Recebeu o toast no appcomponent: " + toast);

      debugger;
    });
    ToastNotificationService.interfaceRuleEmitter.subscribe(
      (toast) => {
       console.log("appc_component:" + toast);
      }
    );
  }

}
