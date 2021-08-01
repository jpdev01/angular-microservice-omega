import { Utils } from './../../../utils/Utils.model';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { LoggedService } from '../../logged.service';
import { url } from 'node:inspector';
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private utils: Utils, private loggedService: LoggedService){}


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request)
      .pipe(
        catchError((err, caught: Observable<HttpEvent<any>>) => {
          let permissionError = err.status == 403 || err.status == 401 || err.url.indexOf("/neusamoda/auth/login") != -1;
          if (err instanceof HttpErrorResponse && (permissionError)) {
            if (err.status == 401) {
              this.loggedService.efetuarLogout();
            } else {
              this.router.navigate(['login']);
              return of(err as any);
            }
          }
          throw err;
        })
      );
    }
}
