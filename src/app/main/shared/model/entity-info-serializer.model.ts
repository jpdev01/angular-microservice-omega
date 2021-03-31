import { FieldInfoSerializer } from './field-info-serializer.model';

export class EntityInfoSerializer {
  entity: any;
  id: string;
  label: string;
  content: any;
  groups: any[];

  constructor(options: {
    entity?: any;
    label?: string;
    content?: string;
    id?: string;
    groups?: any[];
  } = {}) {
    this.label = options.label;
    this.content = options.content;
    this.id = options.id;
    this.groups = options.groups;
    this.entity = options.entity;
  }
}
