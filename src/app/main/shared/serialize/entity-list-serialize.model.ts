import { View } from '../model/list/view.enum';

export class EntityListSerialize {
  content: {
    cols: any[];
    rows: any[];
  };
  entity: any;
  tableStructure: any;
  infoUrl: string;
  eform: boolean;
  view: View | string;

  constructor(options: {
    entity?: any;
    tableStructure?: any;
    infoUrl?: string;
    eform?: boolean;
    content?: {
      cols: any[];
      rows: any[];
    }
    view?: View | string;
  } = {}) {
    this.entity = options.entity;
    this.tableStructure = options.tableStructure;
    this.infoUrl = options.infoUrl;
    this.eform = options.eform;

    // fixme: new!
    this.content = options.content;
    this.view = options.view;
  }
}
