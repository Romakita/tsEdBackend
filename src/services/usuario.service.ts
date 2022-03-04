import { Service } from "@tsed/di";
import { Usuarios } from "../modelos/usuario.model";
import { GenericService } from "./generic.service";

@Service()
export class UsuarioService extends GenericService {
  constructor(modelo: Usuarios) {
    super(modelo)
  }
}
// export class UsuarioService {
//   @Inject(Usuarios)
//   private Usuario: MongooseModel<Usuarios>

//   // $onInit() {
//   //   this.reload()
//   // }

//   async query(opts = {}): Promise<Usuarios[]> {
//     const resultado = await this.Usuario.find(opts);
//     return resultado
//   }
// }
