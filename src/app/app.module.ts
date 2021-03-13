import { Utils } from './main/shared/utils/Utils.model';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './main/components/navbar/navbar.component';
import { AuthGuard } from './main/shared/safety/AuthGuard.model';
import { AdminGuard } from './main/shared/safety/AdminGuard.model';
import { UsersListComponent } from './main/modules/users/users-list/users-list.component';
import { UsersNavbarComponent } from './users-navbar/users-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersNavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Utils, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
