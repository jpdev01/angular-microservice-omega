import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Input() listData;
  selected;


  constructor() { }

  ngOnInit() {
  }

  public getTitle(entity: any): string{
    return entity.name || entity.title;
  }

  public onClick(category): any{
    this.listData.onclick(category);
    this.selected = category;
  }

  private applyColor(event): void{
    console.log(event.target);
  }

}
