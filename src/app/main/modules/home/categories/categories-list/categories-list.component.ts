import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntityListAbstract } from 'src/app/main/shared/abstract/entity-list.abstract';
import { EntityListInterfaceComponent } from 'src/app/main/shared/interface/entity-list.interface';
import { Category } from 'src/app/main/shared/model/category.model';
import { EntityListSerialize } from 'src/app/main/shared/serialize/entity-list-serialize.model';
import { CategoryApiService } from 'src/app/main/shared/service/api/category-api.service';
import { NavbarService } from 'src/app/main/shared/service/navbar.service';
import { PatternUrl } from 'src/app/main/shared/utils/PatternUrl.model';
import { Utils } from 'src/app/main/shared/utils/Utils.model';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent extends EntityListAbstract implements OnInit, EntityListInterfaceComponent {
  public users: Category[];
  filter = "";
  listData: EntityListSerialize;
  @Input() config;

  constructor(public serviceApi: CategoryApiService, private router: Router, public utils: Utils, public navbarService: NavbarService) {
    super(serviceApi, navbarService);
   }

  ngOnInit(): void {
    this.openListNavbar();
    this.initListData();
    this.getFilter();
  }

  openListNavbar(): void {
    this.navbarService.showNavbar(true);
  }
  getFilter(): void {
    this.filter = super.getFilter();
  }
  redirectToInfo(id: number): void {
    this.router.navigate(['home/category/', id]);
  }
  public initListData(): void {
    let tableInfo = {
      header: ["Nome", "Descrição"],
      row: ["name", "description"]
    };

    if (this.config.combobox){
      tableInfo.header.unshift('Selecionar');
      tableInfo.row.unshift('checkbox');
    }

    this.listData = new EntityListSerialize({
      entity: super.getEntityList(),
      tableStructure: tableInfo,
      infoUrl: new PatternUrl().category
    });
  }

}
