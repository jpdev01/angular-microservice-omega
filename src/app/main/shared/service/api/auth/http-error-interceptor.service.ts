import { Utils } from './../../../utils/Utils.model';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { Router } from '@angular/router';
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private utils: Utils){}


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request)
      .pipe(
        catchError((err, caught: Observable<HttpEvent<any>>) => {
          if (err instanceof HttpErrorResponse && (err.status == 403 || err.status == 401)) {
            this.router.navigate(['login']);
            return of(err as any);
          }
          throw err;
        })
      );
    }
}
