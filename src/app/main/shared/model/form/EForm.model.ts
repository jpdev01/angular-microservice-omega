import { FormField } from 'src/app/main/shared/model/form-field.model';
export class Eform {
  nameId: string;
  fields: FormField[];
  groups: {
    fields: FormField[];
  }[];

  constructor(options: {
    nameId?: string;
    fields?: FormField[];
    groups?: {
      fields: FormField[];
    }[];
  }){
    this.nameId = options.nameId;
    this.fields = options.fields;
    this.groups = options.groups;
  }
}
