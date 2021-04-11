import { PatternUrl } from './../utils/PatternUrl.model';

import { ActivatedRoute } from "@angular/router";
import { EntityFormInterfaceComponent } from "../interface/entity-form.interface";
import { EntityListInterfaceComponent } from "../interface/entity-list.interface";
import { ServiceApiInterface } from "../interface/service-api.interface";
import { ResponsePageable } from "../model/responsePageable.model";
import { NavbarService } from "../service/navbar.service";

export abstract class EntityListAbstract implements EntityListInterfaceComponent{

    constructor(public serviceApi: ServiceApiInterface, public navbarService: NavbarService){

    }

    initListData(): void {
        throw new Error("Method not implemented.");
    }

    getEntityList(): any {
        return this.serviceApi.getAll();
        /*this.serviceApi.getAll().subscribe(
            (result: ResponsePageable) => {
                return result.content;
            },
            (error) => {

            });
            */
    }
    openListNavbar(): void {
        this.navbarService.showNavbar(true);
    }
    getFilter(): any {
        return NavbarService.emitterFilterChange.subscribe((filter) => {return filter});
    }
    redirectToInfo(id: number): void {
        throw new Error("Method not implemented.");
    }


}
