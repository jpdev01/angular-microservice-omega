import { FormField } from 'src/app/main/shared/model/form-field.model';
export class Eform {
  nameId: string;
  fields: FormField[];
  groups: {
    fields: FormField[];
  }[];
  onSave: any;
  onSaveError: any;

  constructor(options: {
    nameId?: string;
    fields?: FormField[];
    groups?: {
      fields: FormField[];
    }[];
    onSave?: any;
    onSaveError?: any;
  }) {
    this.nameId = options.nameId;
    this.fields = options.fields;
    this.groups = options.groups;
    this.onSave = options.onSave;
    this.onSaveError = options.onSaveError;
  }
}
