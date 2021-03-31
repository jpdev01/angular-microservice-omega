import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntityInfoSerializer } from '../../shared/model/entity-info-serializer.model';

@Component({
  selector: 'app-entity-info',
  templateUrl: './entity-info.component.html',
  styleUrls: ['./entity-info.component.css']
})
export class EntityInfoComponent implements OnInit {

  @Input() entityInfoSerialize: EntityInfoSerializer;
  entity: any;
  groupsOfFields: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.entity = this.entityInfoSerialize.entity;
    console.log(this.entityInfoSerialize);
    this.groupsOfFields = this.entityInfoSerialize.groups;
  }

  public edit(): void {
    let entityInfoId = this.entity.id;
    this.router.navigate(['home/user/frm', entityInfoId]);
  }

}
