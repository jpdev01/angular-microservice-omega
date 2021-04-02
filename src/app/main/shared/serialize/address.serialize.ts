import { Address } from "../model/address.model";

export class AddressSerialize {

    address: Address;
    constructor(address: Address){
        this.address = address;
    }

    serialize(address: Address){

    }

    toString(): string{
        let address = this.address;
        return address.publicPlace 
        + (address.complement ? ", " + address.complement : "") + ", "
        + address.city + "/" + address.uf + " (" + address.cep + ")";
    }
}