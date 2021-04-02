import { Observable } from "rxjs";

export declare interface ServiceApiInterface {

    //  EDICAO!
    getById(int: Number);
    getAll();
    save(entity: any);
}