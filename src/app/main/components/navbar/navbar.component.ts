import { PatternUrl } from './../../shared/utils/PatternUrl.model';
import { Component, OnInit } from '@angular/core';
import {IconNavbar} from '../../shared/model/icon-navbar.model';
import {IconDropdownNavbar} from '../../shared/model/icon-dropdown-navbar.model';
import { NavbarApiService } from '../../shared/service/api/navbar-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = "Neusa Moda";
  navbar;
  patternUrl = new PatternUrl();

  constructor(
    private navbarApi: NavbarApiService
  ) {
    this.getNavbar();
  }

  ngOnInit(): void {
  }

  getNavbar(){
    this.navbarApi.get().subscribe(nav => this.navbar = nav);
  }

}
