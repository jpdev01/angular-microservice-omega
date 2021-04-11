export class EntityListSerialize {
    entity: any;
    tableStructure: any;
    infoUrl: string;
    eform: boolean;

    constructor(options: {
        entity?: any;
        tableStructure?: any;
        infoUrl?: string;
        eform?: boolean;
    } = {}){
        this.entity = options.entity;
        this.tableStructure = options.tableStructure;
        this.infoUrl = options.infoUrl;
        this.eform = options.eform;
    }
}
