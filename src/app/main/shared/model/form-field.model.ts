import { FieldFormType } from "../enum/field-form-type.enum";

export class FormField {
  id: string;
  label: string;
  fieldType: FieldFormType;
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
  onclick: any;
  icon: string;
  group: string;

  constructor(options: {
    id?: string;
    icon?: string;
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
    onclick?: any;
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
    this.fieldType = options.type;
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

    this.icon = options.icon;
    this.onclick = options.onclick;


  }

  public isTextAreaField(): boolean {
    return this.fieldType === FieldFormType.TEXTAREA;
  }

  public isTextField(): boolean {
    return this.fieldType === FieldFormType.TEXT;
  }

  public isListField(): boolean {
    return this.fieldType === FieldFormType.LIST;
  }

  public isSelectField(): boolean {
    return this.fieldType === FieldFormType.SELECT;
  }

  public isPasswordField(): boolean {
    return this.fieldType === FieldFormType.PASSWORD;
  }

  public isDateField(): boolean {
    return this.fieldType === FieldFormType.DATE;
  }

  public isEmailField(): boolean {
    return this.fieldType === FieldFormType.EMAIL;
  }

  public getTypeAsString(): string {
    return FieldFormType[this.fieldType];
  }

  public isNumberField(): boolean {
    return this.fieldType === FieldFormType.NUMBER;
  }
}
