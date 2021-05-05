import { FieldFormType } from "../enum/field-form-type.enum";
import { ListType } from './form/list-type.enum';

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
  modeView: string;
  listType: ListType;

  constructor(options: {
    id?: string;
    icon?: string;
    options?: any;
    label?: string;
    // JS
    type?: FieldFormType;
    //JAVA
    fieldType?: string;
    defaultValue?: string;
    style?: string;
    listType?: ListType;
    modeView?: string;
    row?: string;
    size?: string;
    labelConfig?: any;
    fields?: object;
    onchange?: any;
    onclick?: any;
    mask?: any;
    listOptions?: string;
    group?: string;
    config?: {
      label: {
        size: string
      }
    };
    formGroupName?: string;
  } = {}) {
    this.id = options.id;
    this.label = options.label;
    this.fieldType = FieldFormType[options.fieldType];
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
    this.fields = options.options;

    this.icon = options.icon;
    this.onclick = options.onclick;
    this.group = options.group;
    this.modeView = options.modeView;
    this.listType = options.listType;
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
