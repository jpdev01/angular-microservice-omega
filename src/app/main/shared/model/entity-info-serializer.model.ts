import { FieldInfoSerializer } from './field-info-serializer.model';

export class EntityInfoSerializer {
  entity: any;
  id: string;
  label: string;
  content: any;
  fields: FieldInfoSerializer[];

  constructor(options: {
    entity?: any;
    label?: string;
    content?: string;
    id?: string;
    fields?: FieldInfoSerializer[];
  } = {}) {
    this.label = options.label;
    this.content = options.content;
    this.id = options.id;
    this.fields = options.fields;
    this.entity = options.entity;
  }
}
