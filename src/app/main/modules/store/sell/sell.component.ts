import { EntityListSerialize } from './../../../shared/serialize/entity-list-serialize.model';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/main/shared/model/product.model';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  listData;

  constructor() { }

  ngOnInit() {
    this.initListData();
  }

  public initListData(): void {
    let tableInfo = {
      header: ["Código de Barras", "Nome", "Valor"],
      row: ["code", "name", "finalValue"]
    };

    this.listData = new EntityListSerialize({
      entity: {},
      tableStructure: tableInfo
    });

      console.log("Hello");
      this.listData.entity = [new Product({
        name: "Teste",
        code: "1",
        finalValue: 120
      })]
  }


}
