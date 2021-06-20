import { RadioInputService } from './../../../shared/service/form/radio-input.service';
import { Component, Input, OnInit } from '@angular/core';

import { FormField } from '../../../shared/model/form-field.model';
import { CheckboxInputService } from '../../../shared/service/form/checkbox-input.service';
import { NavbarService } from '../../../shared/service/navbar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Utils } from '../../../shared/utils/Utils.model';
import { ListApiService } from '../../../shared/service/api/list-api.service';
import { EntityListSerialize } from '../../../shared/serialize/entity-list-serialize.model';
import { View } from '../../../shared/model/list/view.enum';
import { DOMTypeReference, ScrollService } from 'src/app/main/shared/service/scroll.service';
import { SelectedFilterService } from 'src/app/main/shared/service/selected-filter.service';
import { Category } from 'src/app/main/shared/model/category.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() listData;
  @Input() component: string;
  @Input() modeView;
  filter = "";

  constructor(
    private utils: Utils,
    private router: Router,
    private navbarService: NavbarService,
    private checkboxInputService: CheckboxInputService,
    private route: ActivatedRoute,
    private listApiService: ListApiService,
    private scrollService: ScrollService
  ) { }

  ngOnInit() {
    this.createFilter();
    this.showNavbar();
    this.scrollService.createDefault(DOMTypeReference.CLASS, 'scroll');
  }

  public open(key): void {
    let viewIsFull = this.listData.view === View.FULL;
    if (viewIsFull) {
      this.router.navigate(['home/' + this.component + '/info', key]);
    }
  }

  private createFilter(): void {
    NavbarService.emitterFilterChange.subscribe(
      (filter) => {
        this.filter = filter;
      }
    );
  }

  public containsInput(td): boolean {
    return td === 'checkbox' || td === 'checkbox' || this.isFormField(td) || this.isRadioInput(td) || this.isCheckboxInput(td);
  }

  public isCheckboxInput(td): boolean {
    return td === 'checkbox' || td.fieldType === "CHECKBOX";
  }

  public isRadioInput(td): boolean {
    return td === 'radio' || td.fieldType === "RADIO";
  }

  public isFormField(td): boolean {
    return td instanceof FormField;
  }

  private showNavbar(): void {
    let viewMode = this.listData.view;
    if (viewMode && viewMode === View.FULL) {
      this.navbarService.showNavbar(true);
    }
  }

  private removeItem(item) {

  }

  public getValueAsString(entityInfo, td): string {
    if (td) {
      if (entityInfo) {
        if (td.indexOf(".") != -1) {
          let tree = td.split(".");
          tree.forEach(element => {
            if (entityInfo) {
              entityInfo = entityInfo[element];
            }
          });
          return entityInfo;
        }
        return entityInfo[td];
      } else {
        return td;
      }

    }
    return "";
  }

  initScroll(): void{

  }

}
