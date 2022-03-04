import { Model, Ref } from "@tsed/mongoose";
import { Required } from "@tsed/schema";
import { Usuarios } from "./usuario.model";

@Model({ connection: 'xdb' })
export class Contas {

  @Ref(Usuarios)
  @Required()
  _referenciaId: string;
}
