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
  titleEntity = "";
  subTitleEntity: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.titleEntity = this.entityInfoSerialize.label;
    this.entity = this.entityInfoSerialize.entity;
    console.log(this.entityInfoSerialize);
    this.groupsOfFields = this.entityInfoSerialize.groups;
    this.subTitleEntity = this.getSubTitleEntity();
  }

  public edit(): void {
    let entityInfoId = this.entity.id;
    let url = this.entityInfoSerialize.url;
    this.router.navigate(['home/' + url + '/frm', entityInfoId]);
  }

  private getSubTitleEntity(): string{
    return this.entity.name || this.entity.login || this.entity.title;
  }

  public getValueFormatted(fieldValue): string{
    if (fieldValue){
      if (typeof(fieldValue) === 'object') {
        let label = "";
        if (Array.isArray(fieldValue)) {
          for (let i = 0; i < fieldValue.length; i++){
            let element = fieldValue[i];
            if (i != 0){
              label += ", ";
            }
            label += this.getValueAsString(element);
          }
        }
        else {
          label += this.getValueAsString(fieldValue);
        }
        return label;
      } else {
        return fieldValue;
      }
    } else {
      return "";
    }
  }

  private getValueAsString(element): string{
    if (element.name) {
      return element.name;
    } else if (element.title) {
      return element.title;
    }
  }

}
