import { Service } from "@tsed/di";
import { Clientes } from "src/modelos/cliente.model";
import { GenericService } from "./generic.service";

@Service()
export class ClienteService extends GenericService {
  constructor(modelo: Clientes) {
    super(modelo)
  }
}
