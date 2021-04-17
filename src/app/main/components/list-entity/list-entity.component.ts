import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { NavbarService } from './../../shared/service/navbar.service';
import { Utils } from './../../shared/utils/Utils.model';
import { Router } from '@angular/router';
import { EntityListSerialize } from '../../shared/serialize/entity-list-serialize.model';
import { CheckboxInputService } from '../../shared/service/form/checkbox-input.service';
import { Observable } from 'rxjs';
import { FormField } from '../../shared/model/form-field.model';
declare var $: any;

@Component({
  selector: 'app-list-entity',
  templateUrl: './list-entity.component.html',
  styleUrls: ['./list-entity.component.css']
})
export class ListEntityComponent implements OnInit {

  @Input() listData: EntityListSerialize;
  //@Output() selectEvent: EventEmitter<any> = new EventEmitter<any>()
  @Input() config;
  @Input() eform;
  entityInfoList: any;
  filter = "";
  patternUrl;

  header: [];
  row: [];
  selectedFields;
  constructor(private utils: Utils, private router: Router, private navbarService: NavbarService, private checkboxInputService: CheckboxInputService) { }

  ngOnInit() {
    this.initHeader();
    this.createFilter();
    this.showNavbar();
  }

  public open(entityInfo): void {
    let isEform = this.config && this.config.isEform;
    if (!isEform) {
      this.router.navigate(['home/' + this.patternUrl + '/info', entityInfo.id]);
    }
  }

  private initHeader(): void {
    this.header = this.listData.tableStructure.header;
    this.row = this.listData.tableStructure.row;
    if (this.listData.entity instanceof Observable){
      this.listData.entity.subscribe(result => {
        this.entityInfoList = result.content;
      });
    } else {
      this.entityInfoList = this.listData.entity;
    }
    this.patternUrl = this.listData.infoUrl;
  }

  private createFilter(): void {
    NavbarService.emitterFilterChange.subscribe(
      (filter) => {
        this.filter = filter;
      }
    );
  }

  public containsInput(td): boolean {
    return td === 'checkbox' || td === 'checkbox' || this.isFormField(td);
  }

  public isCheckboxInput(td): boolean {
    return td === 'checkbox';
  }

  public isRadioInput(td): boolean {
    return td === 'radio';
  }

  public isFormField(td): boolean {
    return td instanceof FormField;
  }

  private showNavbar(): void {
    if (!this.config || (this.config && !this.config.isEform)) {
      this.navbarService.showNavbar(true);
    }
  }

  private removeItem(item){

  }

}
