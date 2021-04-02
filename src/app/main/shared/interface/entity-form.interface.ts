export declare interface EntityFormInterfaceComponent {

    //  EDICAO!
    getIdByUrl(): void;
    loadEntityInfo(id: number): void;

    initFormStructure(): void;
    initFormImpl(): void;
    initFormBuilder(): void;
    initFormValues(): void;
    applyInterfaceRule(): void;
    getOnSave(): {};
}