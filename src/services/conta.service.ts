import { Service } from "@tsed/di";
import { Contas } from "src/modelos/conta.model";
import { GenericService } from "./generic.service";

@Service()
export class ContaService extends GenericService {
  constructor(modelo: Contas) {
    super(modelo)
  }
}
