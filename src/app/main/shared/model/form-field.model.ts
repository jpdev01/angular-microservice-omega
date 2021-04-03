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
  onchange: any;
  mask:any;
  formGroupName: string;

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
    onchange?: any;
    mask?: any;
    config?: {
      label: {
        size: string
      }
    };
    formGroupName?: string;
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
    this.options = options.config;
    this.fields = options.fields;
    this.onchange = options.onchange;
    this.mask = options.mask;
    this.formControlName = options.formGroupName;

  }

}
