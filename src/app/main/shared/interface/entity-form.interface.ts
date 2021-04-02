export declare interface EntityFormInterfaceComponent {

    //  EDICAO!
    getIdByUrl(): void;
    loadEntityInfo(id: number): void;

    initFormStructure(): void;
    initFormBuilder(): void;
    applyInterfaceRule(): void;
    getOnSave(): {};
}