import { FormField } from '../../../shared/model/form-field.model';
import { CheckboxInputService } from '../../../shared/service/form/checkbox-input.service';
import { NavbarService } from '../../../shared/service/navbar.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Utils } from '../../../shared/utils/Utils.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListApiService } from '../../../shared/service/api/list-api.service';
import { EntityListSerialize } from '../../../shared/serialize/entity-list-serialize.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  entity: any;
  listData: EntityListSerialize;
  entityInfoList: any;
  filter = "";
  patternUrl;
  component: string;

  header: [];
  row: [];
  selectedFields;
  constructor(
    private utils: Utils,
    private router: Router,
    private navbarService: NavbarService,
    private checkboxInputService: CheckboxInputService,
    private route: ActivatedRoute,
    private listApiService: ListApiService
  ) { }

  ngOnInit() {
    this.initEntity();
    this.initHeader();
    this.createFilter();
    this.showNavbar();
  }

  private initEntity(): void {
    this.route.params.subscribe(params => {
      this.component = params['component'];
      this.listApiService.get(this.component).subscribe((listData => {
        this.listData = listData;
      }));
    });

  }

  public open(entityInfo): void {
    //let isEform = this.config && this.config.isEform;
    // if (!isEform) {
    //   this.router.navigate(['home/' + this.patternUrl + '/info', entityInfo.id]);
    // }
  }

  private initHeader(): void {
    this.header = this.listData.tableStructure.header;
    this.row = this.listData.tableStructure.row;
    if (this.listData.entity instanceof Observable) {
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
    // if (!this.config || (this.config && !this.config.isEform)) {
    //   this.navbarService.showNavbar(true);
    // }
  }

  private removeItem(item) {

  }

  ngAfterContentChecked() {
    let entityList = this.listData.entity;
    if (!(entityList instanceof Observable)) {
      this.entityInfoList = entityList;
    }
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


}
