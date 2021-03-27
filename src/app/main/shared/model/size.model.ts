
export class Size {
  size = this.populateSize();
  size2 = Size2;

  private populateSize(): number[]{
    let values = [];
    for (let i = 30; i <= 50; i++) {
      values.push(i);
    }
    return values;
  }
}

export enum Size2 {
  PP, P, M, G, GG
}
