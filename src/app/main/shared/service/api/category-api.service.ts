import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ServiceApiInterface } from "../../interface/service-api.interface";
import { Category } from "../../model/category.model";
import { ResponsePageable } from "../../model/responsePageable.model";
import { Utils } from "../../utils/Utils.model";

@Injectable({
    providedIn: 'root'
})
export class CategoryApiService implements ServiceApiInterface {

    apiUrl: string;
    httpOptions: object;

    constructor(private httpClient: HttpClient, private utils: Utils) {
        this.apiUrl = this.utils.getApiUrl();
        this.httpOptions = this.utils.getHttpOptions();
    }

    public getAll(): Observable<ResponsePageable> {
        return this.httpClient.get<ResponsePageable>(this.apiUrl + '/category');
    }

    public getById(id: number): Observable<Category> {
        debugger;
        return this.httpClient.get<Category>(this.apiUrl + '/category/' + id);
    }

    public save(category: Category): Observable<Category> {
        return this.httpClient.post<any>(this.apiUrl + '/category/save', category, this.httpOptions);
    }

}
