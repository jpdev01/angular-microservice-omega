import {FormField} from '../../../shared/model/form-field.model';
import {CheckboxInputService} from '../../../shared/service/form/checkbox-input.service';
import {NavbarService} from '../../../shared/service/navbar.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Utils} from '../../../shared/utils/Utils.model';
import {Component, OnInit, Input} from '@angular/core';
import {ListApiService} from '../../../shared/service/api/list-api.service';
import {EntityListSerialize} from '../../../shared/serialize/entity-list-serialize.model';
import {View} from 'src/app/main/shared/model/list/view.enum';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listData: EntityListSerialize;
  @Input() component: string;
  @Input() modeView;
  isEform = false;

  header: [];
  row: [];
  selectedFields;
  constructor(
    private route: ActivatedRoute,
    private listApiService: ListApiService
  ) { }

  ngOnInit() {
    this.initEntity();
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
        radio: true
      });
      this.isEform = true;
    }
    this.listApiService.get(this.component).subscribe((listData => {
      let viewMode = listData.view;
      if (typeof(viewMode) == "string") {
        viewMode = View[viewMode];
      }
      listData.view = viewMode;
      this.listData = new EntityListSerialize(listData);
    }));

  }
}
