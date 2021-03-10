import { Address } from "./address.model";
import { Reference } from "./reference.model";

export class Customer {
  id: number;
  name: string;
  nickname: string;
  cpf: string;
  RG: string;
  borndate: string;
  dataReg: string;
  email: string;
  fone: string;
  mobile: string;
  description: string;
  credit: string;
  size: string;
  size2: string;
  office: string;
  addrress: Address;
  reference: Reference;
}
