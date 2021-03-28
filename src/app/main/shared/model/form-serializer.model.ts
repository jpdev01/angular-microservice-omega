import { group } from '@angular/animations';
import { FormField } from './form-field.model';
import { FormGroupSerializer } from './form-group-serializer.model';

export class FormSerializer {
  entityName: string;
  id: string;
  name: string;
  groups: FormGroupSerializer[];
  //groups: [{key: string; field: FormField[]}];
  formGroupName: string;
  configs: object;
  serviceApi: any;

  constructor(options: {
    id?: string;
    name?: string;
    formGroupName?: string;
    groups?: any[];
    configs?: object;
    entityName?: string;
    serviceApi?: any;
  } = {}) {

    this.id = options.id;
    this.name = options.name;

    // this.initGroupsFields(options);
    this.groups = options.groups ? options.groups : [];
    this.formGroupName = options.formGroupName;
    this.configs = options.configs;
    this.entityName = options.entityName;
    this.serviceApi = options.serviceApi;

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
