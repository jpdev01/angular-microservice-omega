export class ModalInfo{
  id: string;
  title: string;
  onSave: any;
  size: string;
  buttons: {
    ok?: {
      title: string;
      onclick: any;
    },
    cancel?: {
      title: string;
      onclick: any;
    }
  }

  constructor(options: {
    id?: string;
    title?: string;
    onSave?: any;
    size?: string;
    buttons?: {
      ok?: {
        title: string;
        onclick: any;
      },
      cancel?: {
        title: string;
        onclick: any;
      }
    }
  }={}){
    this.id = options.id;
    this.title = options.title;
    this.onSave = options.onSave;
    this.size = options.size;
    this.buttons = options.buttons;
  }
}
