import {FormField} from '../../../shared/model/form-field.model';
import {CheckboxInputService} from '../../../shared/service/form/checkbox-input.service';
import {NavbarService} from '../../../shared/service/navbar.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Utils} from '../../../shared/utils/Utils.model';
import {Component, OnInit, Input} from '@angular/core';
import {ListApiService} from '../../../shared/service/api/list-api.service';
import {EntityListSerialize} from '../../../shared/serialize/entity-list-serialize.model';
import {View} from 'src/app/main/shared/model/list/view.enum';
import { SelectedFilterService } from 'src/app/main/shared/service/selected-filter.service';
import { Tree } from 'src/app/main/shared/model/tree.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listData: EntityListSerialize;
  @Input() component: string;
  @Input() modeView;
  treeConfig: any;
  isEform = false;

  header: [];
  row: [];
  selectedFields;

  filter: {};
  constructor(
    private route: ActivatedRoute,
    private listApiService: ListApiService,
    private selectedService: SelectedFilterService
  ) { }

  ngOnInit() {
    this.initEntity();
    this.makeSelectEvent();
  }

  private initEntity(): void {
    if (!this.component){
      this.route.params.subscribe(params => {
        if(params['component']){
          this.component = params['component'];
        }
      });
    }
    if (this.modeView){
      this.listApiService.setOptions({
        reduced: true,
        input: true
      });
      this.isEform = true;
    }
    this.component = this.component.toLowerCase();
    this.getListData();

  }

  getListData(): void{
    this.listApiService.get(this.component).subscribe((listData => {
      if(listData.treeComponent){
        this.treeConfig = listData.treeComponent;
      }

      let viewMode = listData.view;
      if (typeof(viewMode) == "string") {
        viewMode = View[viewMode];
      }
      listData.view = viewMode;
      this.listData = new EntityListSerialize(listData);
    }));
  }

  makeSelectEvent():void{
    this.selectedService.get().subscribe((data)=> {
      this.filter = {
        'name': data.type,
        'value': data.element.id
      };
      this.listApiService.setFilter(this.filter);
      this.getListData();
    });
  }
}
