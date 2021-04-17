import { ProductsApiService } from './../../../shared/service/products-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  typeInput = TypeInput.SCANNER;
  frm: FormGroup;
  codeScan;

  constructor(
    private fb: FormBuilder,
    private productApi: ProductsApiService
  ) { }

  ngOnInit() {
    this.initListData();
    this.initFrm();
  }

  private initFrm(){
    this.frm = this.fb.group({
      codeScan: [this.codeScan, [Validators.required]],
      typeInput: [this.typeInput, []]
    });
  }

  keyCode($event): void {
    let code = $event.target.value;
    if (code){
      if (this.typeInput == TypeInput.SCANNER){
        this.getProductByCode(code);
        //this.frm.controls['codeScan'].setValue("");
        this.codeScan = "";
      }
    }
  }

  private getProductByCode(code: any){
    this.productApi.getById(code).subscribe((product)=>{
      this.listData.entity.push(product);
    });
  }

  public initListData(): void {
    let tableInfo = {
      header: ["Código de Barras", "Nome", "Valor"],
      row: ["code", "name", "finalValue"]
    };

    this.listData = new EntityListSerialize({
      entity: [],
      tableStructure: tableInfo
    });
  }

  public addFieldToArray(product: Product) {
    this.listData.entity.push(product);
  }

  changeMethodInput($event){
      this.typeInput = $event.target.value;
  }


}

enum TypeInput {
  KEYBOARD, SCANNER
}
