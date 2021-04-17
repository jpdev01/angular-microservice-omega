import { FormField } from './../../../shared/model/form-field.model';
import { ProductsApiService } from './../../../shared/service/products-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntityListSerialize } from './../../../shared/serialize/entity-list-serialize.model';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/main/shared/model/product.model';
import { FieldFormType } from 'src/app/main/shared/enum/field-form-type.enum';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  listData;
  typeInput = TypeInput.KEYBOARD;
  frm: FormGroup;
  codeScan;
  config;

  constructor(
    private fb: FormBuilder,
    private productApi: ProductsApiService
  ) { }

  ngOnInit() {
    this.initListData();
    this.initFrm();
    this.initConfig();
  }

  private initFrm(){
    this.frm = this.fb.group({
      codeScan: [this.codeScan, [Validators.required]],
      typeInput: [this.typeInput, []]
    });
  }

  keyCode($event): void {
    let type = $event.type;
    let code = $event.target.value;
    let validInput = (this.typeInput == TypeInput.SCANNER && type == "keyup") || (this.typeInput == TypeInput.KEYBOARD && type == "change")
    if (code){
      if (validInput){
        this.getProductByCode(code);
        //this.frm.controls['codeScan'].setValue("");
        this.codeScan = "";
      }
    }
  }

  private getProductByCode(code: any){
    this.productApi.getById(code).subscribe((product)=>{
      if (product.qtde){
        this.addFieldToArray(product);
      }
    });
  }

  public initListData(): void {
    let tableInfo = {
      header: ["Código de Barras", "Nome", "Valor", "Remover"],
      row: ["code", "name", "finalValue", new FormField({
        type: FieldFormType.BUTTON,
        icon: "fa fa-trash",
        onclick: (tr) => {
          // exclusao de item
          let tableStructureEntity = this.listData.entity;
          let index = tableStructureEntity.indexOf(tr);
          tableStructureEntity.splice(index, 1);
        }
      })
      ]
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

  private initConfig(): void {
    this.config.isEform = true;
  }

}

enum TypeInput {
  KEYBOARD, SCANNER
}

