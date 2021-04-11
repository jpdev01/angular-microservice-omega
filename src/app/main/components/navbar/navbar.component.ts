import { PatternUrl } from './../../shared/utils/PatternUrl.model';
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
  componentsNavbar;

  constructor() {
    this.createIcons();
  }

  ngOnInit(): void {
  }

  createIcons(){
    let patternUrl = new PatternUrl();
    this.componentsNavbar = [
      new IconNavbar({name:'Ínicio', image:'fa fa-home', link:''}),
      new IconNavbar({name:'Portal de vendas', image:'fa fa-cart-plus', link:''}),
      new IconNavbar({name:'Caixa', image:'fa fa-folder-open-o', link:''}),
      new IconNavbar({name:'Pagamentos', image:'fa fa-credit-card-alt', link:''}),
      new IconDropdownNavbar({name:'Consultas', image:'fa fa-home', items:
      [
        new IconNavbar({name:'Clientes', image:'', link: patternUrl.getFieldHome(patternUrl.customer) }),
        new IconNavbar({name:'Produtos', image:'', link: patternUrl.getFieldHome(patternUrl.product) }),
        new IconNavbar({name:'Categorias', image:'', link: patternUrl.getFieldHome(patternUrl.category)}),
        new IconNavbar({name:'Fornecedores', image:'', link: patternUrl.getFieldHome(patternUrl.provider)}),
        new IconNavbar({name:'Vendas', image:'', link:''}),
        new IconNavbar({name:'Vendas condicionais', image:'', link:''})
      ]}),
      new IconDropdownNavbar({name:'Mais', image:'fa fa-plus', items:
      [
        new IconNavbar({name:'Aniversários', image:'', link:''})
      ]}),
      new IconNavbar({name:'Logout', image:'', link:''})
    ];
  }

}
