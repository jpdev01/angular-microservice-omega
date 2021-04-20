import { Utils } from './main/shared/utils/Utils.model';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './main/shared/safety/AuthGuard.model';
import { AdminGuard } from './main/shared/safety/AdminGuard.model';
import { ListEntityModule } from './main/components/list-entity/list-entity.module';
import { HttpErrorInterceptor } from './main/shared/service/api/auth/http-error-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ListEntityModule,
  ],
  providers: [Utils, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
