export class FormField {
  id: string;
  label: string;
  type = "text";
  defaultValue: string = "";
  classes = "";
  formControlName: string;
  row: string;
  options: object;
  fields: object;

  constructor(options: {
    id?: string;
    label?: string;
    type?: string;
    defaultValue?: string;
    style?: string;
    row?: string;
    size?: string;
    labelConfig?: any;
    fields?: object;
  }= {}) {

    this.id = options.id;
    this.label = options.label;
    if (options.type) {
      this.type = options.type;
    }
    this.defaultValue = options.defaultValue;
    if (options.style) {
      this.classes = options.style;
    }
    this.row = options.row;
    this.options = {
      // label: { size: "" }
    };
    this.fields = options.fields;


  }

}
