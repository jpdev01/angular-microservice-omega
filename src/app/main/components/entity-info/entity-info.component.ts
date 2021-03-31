import { Component, Input, OnInit } from '@angular/core';
import { EntityInfoSerializer } from '../../shared/model/entity-info-serializer.model';

@Component({
  selector: 'app-entity-info',
  templateUrl: './entity-info.component.html',
  styleUrls: ['./entity-info.component.css']
})
export class EntityInfoComponent implements OnInit {

  @Input() entityInfoSerialize: EntityInfoSerializer;
  entity: any;

  constructor() { }

  ngOnInit() {
    this.entity = this.entityInfoSerialize.entity;
  }

}
