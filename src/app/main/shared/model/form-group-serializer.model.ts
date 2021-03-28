export class FormGroupSerializer {
  formGroupName: string;
  fields: any[];

  constructor(options: {
    formGroupName?: string;
    fields?: any[];
  } = {}) {
    this.formGroupName = options.formGroupName;
    this.fields = options.fields ? options.fields : [];
  }
}
