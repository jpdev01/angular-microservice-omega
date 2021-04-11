import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NavbarService } from './../../shared/service/navbar.service';
import { Utils } from './../../shared/utils/Utils.model';
import { Router } from '@angular/router';
import { EntityListSerialize } from '../../shared/serialize/entity-list-serialize.model';

@Component({
  selector: 'app-list-entity',
  templateUrl: './list-entity.component.html',
  styleUrls: ['./list-entity.component.css']
})
export class ListEntityComponent implements OnInit {

  @Input() listData: EntityListSerialize;
  //@Output() selectEvent: EventEmitter<any> = new EventEmitter<any>()
  @Input() config;
  entityInfoList: any;
  filter = "";
  patternUrl;

  header: [];
  row: [];
  constructor(private utils: Utils, private router: Router, private navbarService: NavbarService) { }

  ngOnInit() {
    this.initHeader();
    this.createFilter();
    this.showNavbar();
  }

  public open(entityInfo): void {
    this.router.navigate(['home/' + this.patternUrl + '/info', entityInfo.id]);
  }

  private initHeader(): void {
    this.header = this.listData.tableStructure.header;
    this.row = this.listData.tableStructure.row;
    this.listData.entity.subscribe(result=>{
      this.entityInfoList = result.content;
    });
    this.patternUrl = this.listData.infoUrl;
  }

  private createFilter():void {
    NavbarService.emitterFilterChange.subscribe(
      (filter) => {
        this.filter = filter;
      }
    );
  }

  public containsInput(td): boolean{
    return td === 'checkbox' || td === 'checkbox';
  }

  public isCheckboxInput(td): boolean {
    return td === 'checkbox';
  }

  public isRadioInput(td): boolean{
    return td === 'radio';
  }

  private showNavbar(): void {
    if (!this.config || (this.config && !this.config.isEform)){
      this.navbarService.showNavbar(true);
    }
  }
}
