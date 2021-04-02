
import { ActivatedRoute, Router } from "@angular/router";
import { EntityFormInterfaceComponent } from "../interface/entity-form.interface";
import { ServiceApiInterface } from "../interface/service-api.interface";

export abstract class EntityFrmAbstract implements EntityFormInterfaceComponent{

    entityId: number;
    entity: any;

    constructor(public route: ActivatedRoute, public serviceApi: ServiceApiInterface){
        
    }
    initFormStructure(): void {
        throw new Error("Method not implemented.");
    }
    getOnSave(): {} {
        throw new Error("Method not implemented.");
    }

    getIdByUrl(): void {
        throw new Error("Method not implemented.");
    }

    loadEntityInfo(id: number): void {
        //
    }

    initFormImpl(): void {
        throw new Error("Method not implemented.");
    }

    initFormBuilder(): void {
        throw new Error("Method not implemented.");
    }

    initFormValues(): void {
        throw new Error("Method not implemented.");
    }

    applyInterfaceRule(): void {
        throw new Error("Method not implemented.");
    }
    
}