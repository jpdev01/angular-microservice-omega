import { FormGroupCustom } from "./form-group.model";

export class FormModel {
  id: string;
  name: string;
  formGroups: FormGroupCustom[];
  formGroupName: string;

  constructor(options: {
    id?: string;
    name?: string;
    formGroups?: FormGroupCustom[];
    formGroupName?: string;
  } = {}) {

    this.id = options.id;
    this.name = options.name;
    this.formGroups = options.formGroups;
    this.formGroupName = options.formGroupName;

  }


}
