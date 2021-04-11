import { PatternUrl } from './../../../../shared/utils/PatternUrl.model';
import { CategoryApiService } from './../../../../shared/service/api/category-api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EntityInfoInterface } from 'src/app/main/shared/interface/entity-info.interface';
import { EntityInfoSerializer } from 'src/app/main/shared/model/entity-info-serializer.model';
import {CategoryInfoSerialize} from '../../../../shared/serialize/category-info.serialize';

@Component({
  selector: 'app-categories-info',
  templateUrl: './categories-info.component.html',
  styleUrls: ['./categories-info.component.css']
})
export class CategoriesInfoComponent implements OnInit, EntityInfoInterface {
  categoryId;
  category;
  entityInfoSerialize;

  constructor(private route: ActivatedRoute, private serviceApi: CategoryApiService) { }

  ngOnInit() {
    this.loadIdByUrl();
    if (this.categoryId) {
      this.getEntityInfoById(this.categoryId);
    }
  }

  loadEntityInfoSerialize(): void {
    this.entityInfoSerialize = new EntityInfoSerializer({
      label: "Categoria",
      entity: this.category,
      url: new PatternUrl().category,
      groups: [new CategoryInfoSerialize().serialize(this.category)]
    });
  }
  loadIdByUrl(): void {
    this.route.params.subscribe(params => this.categoryId = params['id']);
  }
  getEntityInfoById(id: any): void {
    this.serviceApi.getById(id).subscribe( result => {
      this.category = result;
      this.loadEntityInfoSerialize();
    });
  }

}
