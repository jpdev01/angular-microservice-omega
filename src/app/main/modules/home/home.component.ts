import { Component, OnInit } from '@angular/core';
import { Utils } from '../../shared/utils/Utils.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public utils: Utils) { }

  ngOnInit(): void {
    this.utils = new Utils();
  }

  teste(): void{
    debugger;
    console.log(this.utils);
  }

}
