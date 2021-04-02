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
  address: Address;
  reference: Reference;

  constructor(options: {
    id?: number;
    name?: string;
    nickname?: string;
    cpf?: string;
    RG?: string;
    borndate?: string;
    dataReg?: string;
    email?: string;
    fone?: string;
    mobile?: string;
    description?: string;
    credit?: string;
    size?: string;
    size2?: string;
    office?: string;
    address?: Address;
    reference?: Reference;
  } = {}){
    this.id =  options.id;
    this.name =  options.name;
    this.nickname =  options.nickname;
    this.cpf =  options.cpf;
    this.RG =  options.RG;
    this.borndate =  options.borndate;
    this.dataReg =  options.dataReg;
    this.email =  options.email;
    this.fone =  options.fone;
    this.mobile =  options.mobile;
    this.description =  options.description;
    this.credit =  options.credit;
    this.size =  options.size;
    this.size2 =  options.size2;
    this.office =  options.office;
    this.address =  options.address;
    this.reference =  options.reference;
  }
}
