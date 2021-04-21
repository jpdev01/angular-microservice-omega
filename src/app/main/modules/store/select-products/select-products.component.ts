import { ProductsApiService } from '../../../shared/service/api/products-api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormField } from './../../../shared/model/form-field.model';
import { EntityListSerialize } from './../../../shared/serialize/entity-list-serialize.model';
import { Product } from './../../../shared/model/product.model';
import { Component, OnInit } from '@angular/core';
import { FieldFormType } from '../../../shared/enum/field-form-type.enum';
import { CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-select-products',
  templateUrl: './select-products.component.html',
  styleUrls: ['./select-products.component.css']
})
export class SelectProductsComponent implements OnInit {
  listData;
  typeInput = TypeInput.KEYBOARD;
  frm: FormGroup;
  codeScan;
  config = {
    isEform: true
  };
  finalValue = 0;

  constructor(
    private fb: FormBuilder,
    private productApi: ProductsApiService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.initListData();
    this.initFrm();
  }

  private initFrm(){
    this.frm = this.fb.group({
      codeScan: [this.codeScan, []],
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

  private getProductByCode(code: any) {
    this.productApi.getById(code).subscribe((product) => {
      if (product) {
        let avaliable = this.availableProduct(product);
        if (avaliable) {
          this.addFieldToArray(product);
          this.saveListProduct(this.listData.entity);
        }
      }
    });
  }

  private availableProduct(product: Product): boolean{
    let qtde = product.qtde;
    let selectedInList =  this.getProductInReading(product.id);
    if (selectedInList && selectedInList.length){
      qtde = qtde - selectedInList.length;
    }
    return qtde > 0;
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
          tr.qtde++;
          tableStructureEntity.splice(index, 1);
          this.saveListProduct(this.listData.entity);
          this.removeValue(tr.finalValue);
        }
      })
      ]
    };


    this.listData = new EntityListSerialize({
      entity: this.getListProduct(),
      tableStructure: tableInfo
    });

    this.setValueByProducts(this.listData.entity);
  }

  public addFieldToArray(product: Product) {
    this.addValue(product.finalValue);
    this.listData.entity.push(product);
  }

  changeMethodInput($event){
      this.typeInput = $event.target.value;
  }

  /*
  * COOKIE
  */
  private saveListProduct(products: Product[]): void {
    let productsObject = JSON.stringify(products);
    this.cookieService.set('store-products', productsObject);
  }

  private addValue(newValue: number){
    this.finalValue = this.finalValue + newValue;
  }

  private removeValue(excValue: number){
    this.finalValue = this.finalValue - excValue;
  }

  private setValueByProducts(products: Product[]): void{
    let value = this.getValueByProducts(products);
    this.finalValue = value;
  }

  private getValueByProducts(products: Product[]): number{
    let finalValue = 0;
    products.forEach(product => {
      finalValue = finalValue + product.finalValue;
    });
    return finalValue;
  }

  /*
  * COOKIE
  */
  getListProduct(): Product[]{
    let productsObject = this.cookieService.get('store-products');
    if (productsObject){
      return JSON.parse(productsObject);
    }
  return [];
  }

  getProductInReading(productId: any): any{
    let products = this.getListProduct();
    return products.filter(product => product.id != null && product.id === productId);
  }

}

enum TypeInput {
  KEYBOARD, SCANNER
}
