export class Address {
  id: number;
  cep: string;
  uf: string;
  publicPlace: string;
  neighborhood: string;
  city: string;
  complement: string;

  constructor(options: {
    id?: number;
    cep?: string;
    uf?: string;
    publicPlace?: string;
    neighborhood?: string;
    city?: string;
    complement?: string;
  } = {}) {
    this.id = options.id;
    this.cep = options.cep;
    this.uf = options.uf;
    this.publicPlace = options.publicPlace;
    this.neighborhood = options.neighborhood;
    this.city = options.city;
    this.complement = options.complement;
  }
}
