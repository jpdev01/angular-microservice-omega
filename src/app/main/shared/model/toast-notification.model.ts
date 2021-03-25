export class ToastNotification {
  text: string;
  title: string;
  timeLabel: string;

  constructor(options: {
    text?: string;
    title?: string;
    labelTime?: string;
  } = {}) {
    this.text = options.text;
    this.title = options.title;
    this.timeLabel = options.labelTime;
  }
}
