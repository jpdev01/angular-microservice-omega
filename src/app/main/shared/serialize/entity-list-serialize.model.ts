export class EntityListSerialize {
    cols: any[];
    rows: any[];
    entity: any;
    tableStructure: any;
    infoUrl: string;
    eform: boolean;

    constructor(options: {
        entity?: any;
        tableStructure?: any;
        infoUrl?: string;
        eform?: boolean;
        cols?: any[];
        rows?: any[];
    } = {}){
        this.entity = options.entity;
        this.tableStructure = options.tableStructure;
        this.infoUrl = options.infoUrl;
        this.eform = options.eform;

        // fixme: new!
        this.cols = options.cols;
        this.rows = options.rows;
    }
}
