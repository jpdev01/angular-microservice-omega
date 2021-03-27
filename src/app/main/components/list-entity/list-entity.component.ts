import { NavbarService } from 'src/app/main/shared/service/navbar.service';
import { Utils } from './../../shared/utils/Utils.model';
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

  header: [];
  row: [];
  constructor(private utils: Utils) { }

  ngOnInit() {
    console.log(this.entityInfoList);
    this.initHeader();
    this.createFilter();
  }

  public open(): void {

  }

  private initHeader(): void {
    this.header = this.tableInfo.header;
    this.row = this.tableInfo.row;
  }

  private createFilter():void {
    NavbarService.emitterFilterChange.subscribe(
      (filter) => {
        this.filter = filter;
      }
    );
  }

}
