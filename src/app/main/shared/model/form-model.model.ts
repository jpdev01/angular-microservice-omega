import { group } from '@angular/animations';
import { FormField } from './form-field.model';

export class FormModel {
  id: string;
  name: string;
  fields: any[];
  groups: [{key: string; field: FormField[]}];
  formGroupName: string;
  options: object;

  constructor(options: {
    id?: string;
    name?: string;
    formGroupName?: string;
    fields?: any[];
    options?: object;
  } = {}) {

    this.id = options.id;
    this.name = options.name;

    // this.initGroupsFields(options);
    this.fields = options.fields;
    this.formGroupName = options.formGroupName;
    this.options = options.options;

  }

  // private initGroupsFields(options: any): void{
  //   let add = false;
  //   options.fields.forEach((field) => {
  //     let row = field.row;
  //     if (this.groups) {
  //       this.groups.forEach((group) => {
  //         if (group.key === row) {
  //           group.field.push(field);
  //           add = true;
  //         }
  //       });
  //       if ( add === false ) {
  //         this.groups.push({
  //           key: '1',
  //           field: field
  //         });
  //       }
  //     } else {
  //       this.groups = [{
  //         key: field.row,
  //         field: field
  //       }];
  //     }


  //   });

  // }


}
