import { FieldFormType } from "../enum/field-form-type.enum";

export class FormField {
  id: string;
  label: string;
  type: FieldFormType;
  defaultValue: string = "";
  classes = "";
  formControlName: string;
  row: string;
  options: object;
  fields: object;
  onchange: any;
  mask: any;
  formGroupName: string;
  listOptions: string;

  constructor(options: {
    id?: string;
    options?: string;
    label?: string;
    type?: FieldFormType;
    defaultValue?: string;
    style?: string;
    row?: string;
    size?: string;
    labelConfig?: any;
    fields?: object;
    onchange?: any;
    mask?: any;
    listOptions?: string;
    config?: {
      label: {
        size: string
      }
    };
    formGroupName?: string;
  } = {}) {

    this.id = options.id;
    this.label = options.label;
    this.type = options.type;
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
    this.listOptions = options.listOptions;



  }

  public isTextAreaField(): boolean {
    return this.type === FieldFormType.TEXTAREA;
  }

  public isTextField(): boolean {
    return this.type === FieldFormType.TEXT;
  }

  public isListField(): boolean {
    return this.type === FieldFormType.LIST;
  }

  public isSelectField(): boolean {
    return this.type === FieldFormType.SELECT;
  }

  public isPasswordField(): boolean {
    return this.type === FieldFormType.PASSWORD;
  }

  public isDateField(): boolean {
    return this.type === FieldFormType.DATE;
  }

  public isEmailField(): boolean {
    return this.type === FieldFormType.EMAIL;
  }

  public getTypeAsString(): string {
    return FieldFormType[this.type];
  }
}
