import { Controller } from "@tsed/di";
import { UsuarioService } from "../services/usuario.service";
import { BaseCRUD } from "./base-crud.controller";

@Controller({
  path: '/usuarios'
})
export class UsuariosCtrl extends BaseCRUD {

  constructor(servico: UsuarioService) {
    super(servico)
  }

}
