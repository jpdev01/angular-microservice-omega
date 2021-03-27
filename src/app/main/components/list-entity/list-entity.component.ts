import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-entity',
  templateUrl: './list-entity.component.html',
  styleUrls: ['./list-entity.component.css']
})
export class ListEntityComponent implements OnInit {

  @Input() tableInfo;
  @Input() entityInfoList: [];
  filter = "";
  constructor() { }

  ngOnInit() {
  }

  public open(): void {

  }

}
