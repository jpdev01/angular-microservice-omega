export class RequestParam{
  key: string;
  value: any;

  constructor(options: {
    key?: string;
    value?: any;
  } = {}){
    this.key = options.key;
    this.value = options.value;
  }

}
