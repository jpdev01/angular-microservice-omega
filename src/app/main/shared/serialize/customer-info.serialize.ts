import { Customer } from '../model/customer.model';
import {FieldInfoSerializer} from '../model/field-info-serializer.model';
import { FormGroupSerializer } from '../model/form-group-serializer.model';

export class CustomerInfoSerialize{

  public serialize(customer: Customer): FormGroupSerializer[]{
      let groups: FormGroupSerializer[] = [];

      let group = new FormGroupSerializer({
          formGroupName: "Documentos",
          fields: [
              new FieldInfoSerializer({
                  label: "Nome",
                  value: customer.name
              })
          ]
      });

      groups.push(group);
      return groups;

  }
}


/*
      groups: [new FormGroupSerializer({
        formGroupName: "Documentos",
        fields: new UserInfoSerialize().serialize(this.customer)
      })] */
