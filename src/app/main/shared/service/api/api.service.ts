import { Permission } from '../../enum/permission.enum';
import { User } from './../../model/user.model';
import { Utils } from './../../utils/Utils.model';
import { ResponsePageable } from './../../model/responsePageable.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceApiInterface } from '../../interface/service-api.interface';
import {Eform} from '../../../shared/model/form/EForm.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService{
  apiUrl: string;
  httpOptions: object;
  component: string;

  constructor(private httpClient: HttpClient, private utils: Utils) {
    this.apiUrl = this.utils.getApiUrl();
    this.httpOptions = this.utils.getHttpOptions();
   }

  ngOnInit(): void {
    // this.apiUrl = this.utils.getApiUrl();
    // this.httpOptions = this.utils.getHttpOptions();
  }

  setComponent(component: string){
    this.component = component;
  }


  public save(user: User): Observable<User> {
    let url = this.apiUrl + '/' + this.component + '/save';
    return this.httpClient.post<User>(url, user, this.httpOptions);
  }

}
