export class Tree {
    type: string;
    fields: [];

    constructor(options: {
        type?: string;
        fields?: [];
    } = {}) {
        this.type = options.type;
        this.fields = options.fields;
    }
}