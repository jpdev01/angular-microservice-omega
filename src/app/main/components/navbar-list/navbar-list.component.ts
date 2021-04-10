import { NavbarService } from 'src/app/main/shared/service/navbar.service';
import { Component, OnInit, SimpleChange } from '@angular/core';
import { Utils } from '../../shared/utils/Utils.model';

@Component({
  selector: 'app-navbar-list',
  templateUrl: './navbar-list.component.html',
  styleUrls: ['./navbar-list.component.css']
})
export class NavbarListComponent implements OnInit {

  filter: string;

  constructor(public utils: Utils) { }

  ngOnInit(): void {
    NavbarService.icoms.subscribe((newFilter) => {
      //filters.add(filter);
    }
    )
  }

  updateFilter($event: any) {
    NavbarService.emitterFilterChange.emit($event.target.value);
  }

  ngOnChanges(change: SimpleChange) {
    console.log(change);
  }

}
