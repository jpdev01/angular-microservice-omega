export class ModalInfo{
  id: string;
  title: string;
  onSave: any;
  size: string;

  constructor(options: {
    id?: string;
    title?: string;
    onSave?: any;
    size?: string;
  }={}){
    this.id = options.id;
    this.title = options.title;
    this.onSave = options.onSave;
    this.size = options.size;
  }
}
