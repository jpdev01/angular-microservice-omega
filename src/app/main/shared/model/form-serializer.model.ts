import { group } from '@angular/animations';
import { FormField } from './form-field.model';
import { FormGroupSerializer } from './form-group-serializer.model';

export class FormSerializer {
  entityName: string;
  id: string;
  name: string;
  groups: FormGroupSerializer[];
  formGroupName: string;
  configs: object;
  serviceApi: any;
  onSave: {
    onSucess: any,
    onError: any
  };

  constructor(options: {
    id?: string;
    name?: string;
    formGroupName?: string;
    groups?: any[];
    configs?: object;
    entityName?: string;
    serviceApi?: any;
    onSave?: {
      onSucess: any;
      onError: any;
    }
  } = {}) {

    this.id = options.id;
    this.name = options.name;
    this.groups = options.groups ? options.groups : [];
    this.formGroupName = options.formGroupName;
    this.configs = options.configs;
    this.entityName = options.entityName;
    this.serviceApi = options.serviceApi;
    this.onSave = options.onSave;
  }
}