import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { NavbarService } from './../../shared/service/navbar.service';
import { Utils } from './../../shared/utils/Utils.model';
import { Router } from '@angular/router';
import { EntityListSerialize } from '../../shared/serialize/entity-list-serialize.model';
import { CheckboxInputService } from '../../shared/service/form/checkbox-input.service';
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
    // FIXME remover quando passar a usar form do angular! gambi.
    //this.markFieldsSelected();
  }

  public open(entityInfo): void {
    let isEform = this.config.eform;
    if (!isEform) {
      this.router.navigate(['home/' + this.patternUrl + '/info', entityInfo.id]);
    }
  }

  private initHeader(): void {
    this.header = this.listData.tableStructure.header;
    this.row = this.listData.tableStructure.row;
    this.listData.entity.subscribe(result => {
      this.entityInfoList = result.content;
    });
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
    return td === 'checkbox' || td === 'checkbox';
  }

  public isCheckboxInput(td): boolean {
    return td === 'checkbox';
  }

  public isRadioInput(td): boolean {
    return td === 'radio';
  }

  private showNavbar(): void {
    if (!this.config || (this.config && !this.config.isEform)) {
      this.navbarService.showNavbar(true);
    }
  }

  private markFieldsSelected(): void {
    // FIXME futuramente isso deve ser alterado para formulario + formControls
    // GAMBI! JQuery pode quebrar indo pegar so pelo id.
    let nameComponent = this.listData.infoUrl;
    if (this.config && this.config.selectedFields) {
      let controls = this.config.selectedFields.controls;
      if (Array.isArray(controls)) {
        controls.forEach((control) => {
          let controlId = control.value['id'];
          this.markImpl(nameComponent + controlId);
        });
      } else {
        let controlId = controls['id'].value;
        this.markImpl(nameComponent + controlId);
      }
    }
  }

  private markImpl(controllerId: any): void {
    // var controllerId = controllerId;
    // let element = $("#" + controllerId);
    // if (element) {
    //   element[0].ready(function () {
    //     element = $("#" + controllerId);
    //     console.log(element);
    //     element.prop("checked", true);
    //   })
    // }
    // this.checkboxInputService.getOnInit().subscribe((initializate) => {
    //   if (initializate) {
    //     $("#" + initializate).prop("checked", true);

    //   }
    // })
  }

  //@ViewChild('tbody') someInput: ElementRef;
  ngAfterContentiInit() {
    this.markFieldsSelected();
  }

}
