import { FieldInfoSerializer } from './../model/field-info-serializer.model';
import { FormGroupSerializer } from './../model/form-group-serializer.model';
import { Category } from './../model/category.model';
export class CategoryInfoSerialize{

  public serialize(category: Category): FormGroupSerializer{
    let fields = new FormGroupSerializer({
      formGroupName: "Detalhes",
      fields: [
        new FieldInfoSerializer({
          label: "Nome",
          value: category.name
        }),

        new FieldInfoSerializer({
          label: "Descrição",
          value: category.description
        })
      ]
    })

    return fields;

  }
}
