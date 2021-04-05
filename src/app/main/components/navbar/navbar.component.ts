import { Component, OnInit } from '@angular/core';
import {IconNavbar} from '../../shared/model/icon-navbar.model';
import {IconDropdownNavbar} from '../../shared/model/icon-dropdown-navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = "Neusa Moda";


  componentsNavbar = [
    new IconNavbar({name:'Ínicio', image:'fa fa-home', link:''}),
    new IconNavbar({name:'Portal de vendas', image:'fa fa-cart-plus', link:''}),
    new IconNavbar({name:'Caixa', image:'', link:''}),
    new IconNavbar({name:'Pagamentos', image:'', link:''}),
    new IconDropdownNavbar({name:'Consultas', image:'fa fa-home', items:
    [
      new IconNavbar({name:'Clientes', image:'', link:'/home/customers'}),
      new IconNavbar({name:'Produtos', image:'', link:''}),
      new IconNavbar({name:'Categorias', image:'', link:''}),
      new IconNavbar({name:'Fornecedores', image:'', link:''}),
      new IconNavbar({name:'Vendas', image:'', link:''}),
      new IconNavbar({name:'Vendas condicionais', image:'', link:''})
    ]}),
    new IconDropdownNavbar({name:'Mais', image:'', items:
    [
      new IconNavbar({name:'Aniversários', image:'', link:''})
    ]}),
    new IconNavbar({name:'Logout', image:'', link:''})
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
