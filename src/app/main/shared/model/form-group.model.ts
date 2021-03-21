export class FormGroupCustom {
  id: string;
  name: string;
  classes: string;
  fields: any[];

  constructor(options: {
    id?: string;
    name?: string;
    classes?: string;
    fields?: any;
  } = {}){
    this.id = options.id;
    this.name = options.name;
    if (options.classes){
      this.classes = options.classes;
    }
    this.fields = options.fields;
  }
}
