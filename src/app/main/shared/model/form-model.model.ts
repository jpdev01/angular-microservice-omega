import { FormGroupCustom } from "./form-group.model";

export class FormModel {
  id: string;
  name: string;
  formGroups: FormGroupCustom[];
  formGroupName: string;

  constructor(id: string, name: string, formGroups: FormGroupCustom[], formGroupName: string){
    this.id = id;
    this.name = name;
    this.formGroups = formGroups;
    this.formGroupName = formGroupName;
  }
}
