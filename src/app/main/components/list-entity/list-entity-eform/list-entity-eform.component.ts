import { FormBuilder, FormGroup } from '@angular/forms';
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
    this.frm = this.fb.group({

    });
  }

}
