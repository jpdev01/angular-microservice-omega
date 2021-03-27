import { NavbarSecundaryModule } from './../../components/navbar-secundary/navbar-secundary.module';
import { NotificationToastComponent } from './../../components/notification-toast/notification-toast.component';
import { Utils } from '../../shared/utils/Utils.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NotificationToastModule } from '../../components/notification-toast/notification-toast.module';


@NgModule({
  declarations: [HomeComponent, NavbarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NotificationToastModule,
    NavbarSecundaryModule
  ],
  providers: [Utils, NotificationToastComponent],
})
export class HomeModule { }
