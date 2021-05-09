import {FormField} from '../../../shared/model/form-field.model';
import {CheckboxInputService} from '../../../shared/service/form/checkbox-input.service';
import {NavbarService} from '../../../shared/service/navbar.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Utils} from '../../../shared/utils/Utils.model';
import {Component, OnInit} from '@angular/core';
import {ListApiService} from '../../../shared/service/api/list-api.service';
import {EntityListSerialize} from '../../../shared/serialize/entity-list-serialize.model';
import {View} from 'src/app/main/shared/model/list/view.enum';

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
    this.createFilter();
  }

  private initEntity(): void {
    this.route.params.subscribe(params => {
      this.component = params['component'];
      this.listApiService.get(this.component).subscribe((listData => {
        let viewMode = listData.view;
        if (typeof(viewMode) == "string") {
          viewMode = View[viewMode];
        }
        listData.view = viewMode;
        this.listData = new EntityListSerialize(listData);
        this.showNavbar();
      }));
    });

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


}
