export class EntityListSerialize {
    entity: any;
    tableStructure: any;
    infoUrl: string;

    constructor(options: {
        entity?: any;
        tableStructure?: any;
        infoUrl?: string;
    } = {}){
        this.entity = options.entity;
        this.tableStructure = options.tableStructure;
        this.infoUrl = options.infoUrl;
    }
}