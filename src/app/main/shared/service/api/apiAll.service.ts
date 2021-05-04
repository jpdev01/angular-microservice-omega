import { ProductsApiService } from './products-api.service';
import { UserApiService } from './user-api.service';
import { Injectable } from '@angular/core';

// FIXME esse service pega todas as api e faz a busca para encontrar qual satisfaz aquele componente. É fundamental p/ ingencao de dependencia.
// MELHORAR E FAZER COM QUE O BACK END ENVIE.
@Injectable({
  providedIn: 'root'
})
export class ApiAllService {

  constructor(
    private userApiService: UserApiService,
    private productApiService: ProductsApiService
  ) { }

  getByString(api: string) {
    if (api === "user") {
      return this.getUserApi();
    } else if (api === "product") {
      return this.getProductApi();
    }
  }

  getUserApi() {
    return this.userApiService;
  }

  getProductApi() {
    return this.productApiService;
  }
}
