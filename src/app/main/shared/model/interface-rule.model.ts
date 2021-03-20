export class InterfaceRule {
  element: string;
  show: boolean;
  rule: any;

  constructor(element: string, show: boolean, rule: any) {
    this.element = element;
    this.show = show;
    this.rule = rule;
  }
}
