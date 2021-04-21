import { Category } from 'src/app/main/shared/model/category.model';
import { ModalService } from './../../shared/service/modal.service';
import { ModalInfo } from './../../shared/model/modal-info.model';
import { Component, Input, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Input() listData;
  @Input() entityType;
  selected: any;
  modalEditInfo: ModalInfo;
  editCategory = false;
  isCategoryEntity = false;


  constructor(private modalService: ModalService) { }

  ngOnInit() {
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
      id: 'categoryEditModal'
    });
    this.populateFrmModal();
  }

  public new(): void {
    this.modalEditInfo = new ModalInfo({
      title: "Categoria ",
      size: 'modal-lg',
      id: 'categoryEditModal'
    });
    this.populateFrmModal();
    this.selected = new Category();
  }

  populateFrmModal(): void{
    if (this.entityType === "category"){
      this.isCategoryEntity = true;
    }
    this.modalService.setId(this.modalEditInfo.id);
    this.editCategory = true;
    this.modalService.toggle();
  }

}
