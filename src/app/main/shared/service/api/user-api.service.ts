import { Permission } from '../../enum/permission.enum';
import { User } from './../../model/user.model';
import { Utils } from './../../utils/Utils.model';
import { ResponsePageable } from './../../model/responsePageable.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceApiInterface } from '../../interface/service-api.interface';
import {Eform} from '../../../shared/model/form/EForm.model';
import { PortalUtil } from '../PortalUtil.service';

@Injectable({
  providedIn: 'root'
})
export class UserApiService implements ServiceApiInterface {

  httpOptions: object;
  apiUrl: string;

  constructor(private utils: Utils, private httpClient: HttpClient) {
    this.httpOptions = this.utils.getHttpOptions();
    this.apiUrl = PortalUtil.getApiUrl();
   }

   public save(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl + '/user/save', user, this.httpOptions);
  }

  public getAll(): Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.apiUrl   + '/user', this.httpOptions);
  }

  public getById(id: number): Observable<User>{
    return this.httpClient.get<User>(this.apiUrl + '/user/' + id, this.httpOptions);
  }

  public  getForm(user: User): Observable<any> {
    return this.httpClient.get<Eform>(this.apiUrl + '/user/eform/build', this.httpOptions);
  }

}
