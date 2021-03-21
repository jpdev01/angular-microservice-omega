import { FormField } from './form-field.model';

export class FormModel {
  id: string;
  name: string;
  fields: FormField[];
  formGroupName: string;

  constructor(options: {
    id?: string;
    name?: string;
    formGroupName?: string;
    fields?: FormField[];
  } = {}) {

    this.id = options.id;
    this.name = options.name;
    this.fields = options.fields;
    this.formGroupName = options.formGroupName;

  }


}
