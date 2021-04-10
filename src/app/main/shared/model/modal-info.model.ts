export class ModalInfo{
  id: string;
  title: string;
  onSave: any;

  constructor(options: {
    id?: string;
    title?: string;
    onSave?: any;
  }={}){
    this.id = options.id;
    this.title = options.title;
    this.onSave = options.onSave;
  }
}
