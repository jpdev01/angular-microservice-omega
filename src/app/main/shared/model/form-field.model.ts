export class FormField {
  id: string;
  label: string;
  type = "text";
  defaultValue: string;
  classes = "";
  formControlName: string;

  constructor(id: string, label: string, type: string, defaultValue: string, styles: string, formControlName: string) {
    this.id = id;
    this.label = label;
    if (type) {
      this.type = type;
    }
    this.defaultValue = defaultValue;
    if (styles) {
      this.classes = styles;
    }
  }

}
