export class FormGroupCustom {
  id: string;
  name: string;
  classes: string;
  fields: any[];
  formGroup: string;

  constructor(id: string, name: string, classes: string, fields: any[], formGroup: string){
    this.id = id;
    this.name = name;
    if (classes){
      this.classes = classes;
    }
    this.fields = fields;
    this.formGroup = formGroup;
  }
}
