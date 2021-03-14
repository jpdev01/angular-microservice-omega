import { Utils } from './main/shared/utils/Utils.model';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './main/shared/safety/AuthGuard.model';
import { AdminGuard } from './main/shared/safety/AdminGuard.model';
import { SearchFilterPipe } from './main/shared/pipe/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent
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
