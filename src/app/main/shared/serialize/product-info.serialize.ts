import { FieldInfoSerializer } from "../model/field-info-serializer.model";
import { FormGroupSerializer } from "../model/form-group-serializer.model";
import { Product } from "../model/product.model";

export class ProductInfoSerializer{
    serialize(product: Product): any[]{
        let groups = [];
        let group;
        group = new FormGroupSerializer({
            formGroupName: "Detalhes",
            fields: [
                new FieldInfoSerializer({
                    label: "Código de barras",
                    value: product.code
                }),
                new FieldInfoSerializer({
                    label: "Nome",
                    value: product.name
                }),
                new FieldInfoSerializer({
                    label: "Valor",
                    value: product.finalValue
                }),
                new FieldInfoSerializer({
                    label: "Cor",
                    value: product.color
                }),
                new FieldInfoSerializer({
                    label: "Quantidade",
                    value: product.qtde
                }),
                new FieldInfoSerializer({
                    label: "Estilo",
                    value: product.qtde
                }),
                new FieldInfoSerializer({
                    label: "Gênero",
                    value: product.genre
                }),
                new FieldInfoSerializer({
                    label: "Tamanho",
                    value: product.size + "/" + product.size2
                }),
                new FieldInfoSerializer({
                    label: "Descrição",
                    value: product.description
                }),
                new FieldInfoSerializer({
                    label: "Categorias",
                    value: product.categories
                }),
                new FieldInfoSerializer({
                    label: "Fornecedor",
                    value: product.provider
                })
            ]
        });
        groups.push(group);


        group = new FormGroupSerializer({
            formGroupName: "Entrada",
            fields: [
                new FieldInfoSerializer({
                    label: "Data",
                    value: product.entryDate
                }),
                new FieldInfoSerializer({
                    label: "Valor",
                    value: product.initialValue
                }),
                new FieldInfoSerializer({
                    label: "Valor",
                    value: product.finalValue
                }),
                new FieldInfoSerializer({
                    label: "Quantidade",
                    value: product.qtde
                }),
                new FieldInfoSerializer({
                    label: "Estilo",
                    value: product.qtde
                })
            ]
        });
        groups.push(group);
        return groups;
    }
}