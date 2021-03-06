import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';
import { Live } from '../model/live.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl = "http://localhost:8080/lives";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  //Observable: próprio para trabalhar com a transição de dados assincronos.
  // Quando formos montar a interface... Fazendo uma requisição para uma api externa, pode ser que isso demore, portanto, o usamos um subscrible
  // Quando obtermos o retorno, declaramos o que será feito, para isso serve o subscribe... Eesse Observable executa o subscribe
  public getLivesWithFlag(flag: string): Observable<ResponsePageable> {
    // aqui é feita a requisição
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag);
  }

  public saveLive(live: any): Observable<Live>{
    return this.httpClient.post<any>(this.apiUrl + '', live, this.httpOptions);
    // primeiro param: link do post
    // segundo param: objeto que irá ser feito post.
    // terceiro: Contem o HttpHeader que contem o Content-type.
  }
}
