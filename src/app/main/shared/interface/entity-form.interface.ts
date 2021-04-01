export declare interface EntityFormInterfaceComponent {

    //  EDICAO!
    getIdByUrl(): void;
    loadEntityInfo(id: number): void;

    initComponentInfo(): void;
    initFormImpl(): void;
    initFormBuilder(): void;
    initFormValues(): void;
    applyInterfaceRule(): void;
}