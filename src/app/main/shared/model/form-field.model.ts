import { FieldFormType } from "../enum/field-form-type.enum";

export class FormField {
  id: string;
  label: string;
  type: string | FieldFormType = FieldFormType.TEXT;
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
    type?: string | FieldFormType;
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
    if (options.type && typeof(options.type) === 'string'){
      options.type = FieldFormType[options.type];
    }
    this.type = options.type ? options.type : FieldFormType.TEXT;
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

  public isTextAreaField():boolean{
    return this.type === FieldFormType.TEXTAREA;
  }

  public isTextField():boolean{
    return this.type === FieldFormType.TEXT;
  }

  public isListField():boolean{
    return this.type === FieldFormType.LIST;
  }

  public isSelectField():boolean{
    return this.type === FieldFormType.SELECT;
  }

  public isPasswordType(): boolean{
    return this.type === FieldFormType.PASSWORD;
  }


}
