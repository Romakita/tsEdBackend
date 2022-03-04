import { Model, Ref, Unique } from "@tsed/mongoose";
import { Description, Enum, MinLength, Property, Required, Schema } from "@tsed/schema";
import generics from "./generics";

enum Tipo {
  ADM = 'admin',
  Revenda = 'revenda',
  Cliente = 'cliente'
}

@Model(generics)
export class Usuarios {

  @Property()
  nome: string;

  // TODO: Adicionar regex conferência de email
  @Required()
  @Unique()
  email: string;

  @Required()
  @MinLength(8)
  senha: string;

  @Enum(Tipo)
  tipo: Tipo

  // @Ref(Conta)
  // @Description('Contas de usuário com restrições')
  // contas: Ref<Conta>[]
}
