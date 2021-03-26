import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {

  constructor(){}

  private situacaoLoginUsuario = new BehaviorSubject<boolean>(false);

  // getSituacaoLoginUsuario() {
  //     return this.situacaoLoginUsuario.asObservable();
  // }

  definirTokenDeAutenticacao(token: string) {
      localStorage.setItem('token', token);

      // "Avisa" que o usuário agora está logado
      this.situacaoLoginUsuario.next(true);
  }

  efetuarLogout() {
      localStorage.removeItem('token');

      // "Avisa" que o usuário NÂO está logado
      this.situacaoLoginUsuario.next(false);
  }
}
