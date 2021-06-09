import { Category } from 'src/app/main/shared/model/category.model';
import { ModalService } from './../../shared/service/modal.service';
import { ModalInfo } from './../../shared/model/modal-info.model';
import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/service/category.service';
import { PatternUrl } from '../../shared/utils/PatternUrl.model';
import { RestEngineService } from '../../shared/service/api/rest-engine.service';

declare var $:any;
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Input() listData;
  @Input() entityType;
  @Input() treeConfig;
  selected: any;
  modalEditInfo: ModalInfo;
  editCategory = false;
  isCategoryEntity = false;


  constructor(
    private modalService: ModalService,
    private categoryService: CategoryService,
    private restEngineService: RestEngineService
    ) { }

  ngOnInit() {
    this.getContentRest();
    if(!this.listData){
      this.listData = {fields: []};
    }
  }

  public getTitle(entity: any): string{
    return entity.name || entity.title;
  }

  public onClick(category): any{
    this.listData.onclick(category);
    this.selected = category;
  }

  public edit(category){
    this.modalEditInfo = new ModalInfo({
      title: "Categoria " + category.name,
      size: 'modal-lg',
      id: 'categoryEditModal',
      onSave: () => this.categoryService.setEventSave()
    });
    this.populateFrmModal();
  }

  public new(): void {
    this.modalEditInfo = new ModalInfo({
      title: "Categoria ",
      size: 'modal-lg',
      id: 'categoryEditModal',
      onSave: () => this.categoryService.setEventSave()
    });
    this.populateFrmModal();
    this.selected = new Category();
  }

  populateFrmModal(): void{
    let pattern = new PatternUrl();
    if (this.listData.type === pattern.category){
      this.isCategoryEntity = true;
    }
    this.modalService.setId(this.modalEditInfo.id);
    this.editCategory = true;
    this.modalService.toggle();
  }

  private getContentRest(){
    let treeList = this.restEngineService.getCustom(this.treeConfig.urlRest);
    treeList.subscribe((list) => {
      this.listData.fields = list.content;
    });
  }

}
