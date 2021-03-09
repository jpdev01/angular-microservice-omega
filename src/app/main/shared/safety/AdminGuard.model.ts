import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminGuard implements CanActivate {
    canActivate() {
       // fazer requisição e ver se o usuario é administrador!
        return true;
    }
}
