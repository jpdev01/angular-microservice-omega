import { Component, OnInit } from '@angular/core';
import {IconNavbar} from '../../shared/model/icon-navbar.model';
import {IconDropdownNavbar} from '../../shared/model/icon-dropdown-navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  items2 = [
    new IconNavbar('Ínicio', 'fa fa-home', ''),
    new IconNavbar('Portal de vendas', 'fa fa-cart-plus', ''),
    new IconNavbar('Caixa', '', ''),
    new IconNavbar('Pagamentos', '', ''),
    new IconDropdownNavbar('Consultas', 'fa fa-home', [
      new IconNavbar('Clientes', '', ''),
      new IconNavbar('Produtos', '', ''),
      new IconNavbar('Categorias', '', ''),
      new IconNavbar('Fornecedores', '', ''),
      new IconNavbar('Vendas', '', ''),
      new IconNavbar('Vendas condicionais', '', '')
    ]),
    new IconDropdownNavbar('Mais', '', [
      new IconNavbar('Aniversários', '', '')
    ]),
    new IconNavbar('Logout', '', '')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
