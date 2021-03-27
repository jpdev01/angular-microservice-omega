import { NavbarService } from 'src/app/main/shared/service/navbar.service';
import { Component, OnInit, SimpleChange } from '@angular/core';
import { Utils } from '../../shared/utils/Utils.model';

@Component({
  selector: 'app-navbar-secundary',
  templateUrl: './navbar-secundary.component.html',
  styleUrls: ['./navbar-secundary.component.css']
})
export class NavbarSecundaryComponent implements OnInit {

  filter: string;

  constructor(public utils: Utils) { }

  ngOnInit(): void {

  }

  updateFilter($event: any) {
    NavbarService.emitterFilterChange.emit($event.target.value);
  }

  ngOnChanges(change: SimpleChange) {
    console.log(change);
  }

}
