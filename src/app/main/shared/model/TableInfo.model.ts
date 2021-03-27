export class TableInfo {
  content: any;
  header: string[];
  row: string[];

  constructor(options: {
    content?: any;
    header?: string[];
    row?: string[];
  } = {}) {
    this.content = options.content;
    this.header = options.header;
    this.row = options.row;
  }
}
