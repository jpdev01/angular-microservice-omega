import { Customer } from '../model/customer.model';
import { FieldInfoSerializer } from '../model/field-info-serializer.model';
import { FormGroupSerializer } from '../model/form-group-serializer.model';
import { DateUtils } from '../utils/DateUtils.model';

export class CustomerInfoSerialize {

    public serialize(customer: Customer): FormGroupSerializer[] {
        let groups: FormGroupSerializer[] = [];

        let group = new FormGroupSerializer({
            formGroupName: "Documentos",
            fields: [
                new FieldInfoSerializer({
                    label: "Nome",
                    value: customer.name
                }),
                new FieldInfoSerializer({
                    label: "Apelido",
                    value: customer.nickname
                }),
                new FieldInfoSerializer({
                    label: "RG",
                    value: customer.RG
                }),
                new FieldInfoSerializer({
                    label: "CPF",
                    value: customer.cpf
                }),
                new FieldInfoSerializer({
                    label: "Data de Nascimento",
                    value: customer.borndate ? customer.borndate + new DateUtils().calcYears(customer.borndate) : ""
                }),
                new FieldInfoSerializer({
                    label: "Data de Registro no sistema",
                    value: customer.dataReg
                })
            ]
        });
        groups.push(group);

        group = new FormGroupSerializer({
            formGroupName: "Contato",
            fields: [
                new FieldInfoSerializer({
                    label: "E-mail",
                    value: customer.email
                }),
                new FieldInfoSerializer({
                    label: "Telefone",
                    value: customer.fone
                }),
                new FieldInfoSerializer({
                    label: "Celular",
                    value: customer.mobile
                })
            ]
        });
        groups.push(group);

        group = new FormGroupSerializer({
            formGroupName: "Detalhes",
            fields: [
                new FieldInfoSerializer({
                    label: "Tamanho",
                    value: customer.size + "/" + customer.size2
                }),
                new FieldInfoSerializer({
                    label: "Trabalho",
                    value: customer.office
                }),
                new FieldInfoSerializer({
                    label: "Endereço",
                    value: customer.address
                }),
                new FieldInfoSerializer({
                    label: "Referência",
                    value: customer.reference
                })
            ]
        });
        groups.push(group);

        return groups;

    }
}
