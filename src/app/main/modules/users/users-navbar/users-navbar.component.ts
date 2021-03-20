import { Component, EventEmitter, OnInit, SimpleChange } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Utils } from 'src/app/main/shared/utils/Utils.model';

@Component({
  selector: 'app-users-navbar',
  templateUrl: './users-navbar.component.html',
  styleUrls: ['./users-navbar.component.css']
})
export class UsersNavbarComponent implements OnInit {

  filter: string;

  constructor(public utils: Utils) { }

  ngOnInit(): void {
    debugger;
  }

//   getUsers(): Observable<string> {
//     return Observable(this.filter);
//  }

  // public filterSubject = new Subject<string>();


  updateFilter($event: any) {
    this.utils.emitterFilterChange.emit($event.target.value);
  }

  ngOnChanges(change: SimpleChange) {
    console.log(change);
  }

}
