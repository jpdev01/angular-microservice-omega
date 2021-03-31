import { User } from './../model/user.model';
import {FieldInfoSerializer} from '../model/field-info-serializer.model';

export class UserInfoSerialize{

  public serialize(user: User): FieldInfoSerializer[]{
    let fields = [

      new FieldInfoSerializer({
        label: "Login",
        value: user.login
      }),

      new FieldInfoSerializer({
        label: "Senha",
        value: user.password
      }),

      new FieldInfoSerializer({
        label: "Permissão",
        value: user.permission
      })



    ];
    return fields;

  }
}
