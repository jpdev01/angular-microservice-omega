import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { EntityListSerialize } from '../../../shared/serialize/entity-list-serialize.model';

@Component({
  selector: 'app-list-entity-eform',
  templateUrl: './list-entity-eform.component.html',
  styleUrls: ['./list-entity-eform.component.css']
})
export class ListEntityEformComponent implements OnInit {
  @Input() listData: EntityListSerialize;
  @Input() config;
  frm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initFrm();
  }

  initFrm(){
    this.frm = this.fb.group({
    });
    let selectedFields = this.config.selectedFields;
    let nameComponent = this.listData.infoUrl;
    let id;
    if (selectedFields) {
      if (selectedFields instanceof FormArray){
        selectedFields.controls.forEach((control)=>{
          id = control.value.id;
          this.frm.addControl(nameComponent + id, new FormControl(''));
        })
      } else {
        id = selectedFields.controls.id.value;
        this.frm.addControl(nameComponent + id, new FormControl(''));
      }
    }
  }

}
