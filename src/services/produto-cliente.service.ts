// import { Inject, Service } from "@tsed/di";
import { ProdutoClientes } from "src/modelos/produtocliente.model";
import { GenericService } from "./generic.service";

export abstract class ProdutoClienteService extends GenericService {
  constructor() {
    super(ProdutoClientes)
  }
}
