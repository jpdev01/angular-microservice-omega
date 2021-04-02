
import { ActivatedRoute } from "@angular/router";
import { EntityFormInterfaceComponent } from "../interface/entity-form.interface";
import { ServiceApiInterface } from "../interface/service-api.interface";

export abstract class EntityFrmAbstract implements EntityFormInterfaceComponent{

    entityId: number;
    entity: any;

    constructor(public route: ActivatedRoute, public serviceApi: ServiceApiInterface){
        
    }

    getIdByUrl(): void {
        this.route.params.subscribe(params => this.entityId = params['id']);
    }

    loadEntityInfo(id: number): void {
        this.serviceApi.getById(id).subscribe((result)=>{
            this.entity = result;
            this.initFormImpl();
          })
    }

    initComponentInfo(): void {
    
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