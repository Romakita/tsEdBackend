import { MongooseModel } from "@tsed/mongoose";

export class GenericService {
  // TODO: Arrumar o tipo `any`
  constructor(private modelo: any) { }

  async query(opts = {}): Promise<any[]> {
    const resultado = await this.modelo.find(opts);
    return resultado
  }
}
