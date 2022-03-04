import { Indexed, Model, Ref } from "@tsed/mongoose";
import { Format, Property, Required } from "@tsed/schema";
import { Clientes } from "./cliente.model";
import generics from "./generics";

@Model(generics)
export class ProdutoClientes {

  @Required()
  @Indexed()
  @Ref(Clientes)
  _idCliente: Ref<Clientes>

  @Property()
  nome: string

  @Required()
  @Format('date')
  dataSolicitacao: Date

  @Required()
  @Format('date')
  dataEmitido: Date

  @Required()
  @Format('date')
  dataVencimento: Date

  @Property()
  numeroOrdem: string

  // NOTE: Fazer enum?
  @Property()
  status: string

  // TODO: Criar validações de MD5
  @Property()
  csrMD5: string

  @Property()
  csfSHA: string

  @Property()
  dominios: Array<string>
}
