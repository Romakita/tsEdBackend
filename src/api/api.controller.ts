import { Controller } from "@tsed/di";
import { ConsultaCPF } from "./serproCPF.controller";
import { UsuariosCtrl } from "./usuarios.controller"

@Controller({
  path: "/api",
  children: [
    UsuariosCtrl,
    ConsultaCPF,
  ]
})
export class ApiController { }
