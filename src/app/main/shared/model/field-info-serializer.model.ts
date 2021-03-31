export class FieldInfoSerializer {
  id: string;
  label: string;
  value: any;
  content: any;

  constructor(options: {
    id?: string;
    label?: string;
    content?: any;
    value?: any;
  } = {}) {
    this.id = options.id;
    this.label = options.label;
    this.content = options.content;
    this.value = options.value;
  }
}
