export class EntityListSerialize {
    entity: any;
    tableStructure: any;

    constructor(options: {
        entity?: any;
        tableStructure?: any;
    } = {}){
        this.entity = options.entity;
        this.tableStructure = options.tableStructure;
    }
}