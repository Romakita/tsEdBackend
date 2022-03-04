import { Model, ObjectID, Ref, Schema, Unique } from "@tsed/mongoose";
import { CollectionOf, Default, Description, Enum, Format, MaxLength, Min, MinLength, Pattern, Property, Required } from "@tsed/schema";
import { Usuarios } from "./usuario.model";
import generics from "./generics"

enum Cartoes {
  CPF = 'CPF',
  CNPJ = 'CNPJ'
}

enum EstadosBrasileiros {
  AC = 'Acre',
  AL = 'Alagoas',
  AP = 'Amapá',
  AM = 'Amazonas',
  BA = 'Bahia',
  CE = 'Ceará',
  DF = 'Distrito Federal',
  ES = 'Espírito Santo',
  GO = 'Goiás',
  MA = 'Maranhão',
  MT = 'Mato Grosso',
  MS = 'Mato Grosso do Sul',
  MG = 'Minas Gerais',
  PA = 'Pará',
  PB = 'Paraíba',
  PR = 'Paraná',
  PE = 'Pernambuco',
  PI = 'Piauí',
  RJ = 'Rio de Janeiro',
  RN = 'Rio Grande do Norte',
  RS = 'Rio Grande do Sul',
  RO = 'Rondônia',
  RR = 'Roraima',
  SC = 'Santa Catarina',
  SP = 'São Paulo',
  SE = 'Sergipe',
  TO = 'Tocantins',
}

// NOTE: Validação e preenchimento fazer pela API dos correios
@Schema()
class CEPSchema {
  @Required()
  cep: number;

  @Required()
  logradouro: string;

  @Required()
  cidade: string;

  @Required()
  @Enum(EstadosBrasileiros)
  // @Enum(EstadosBrasileiros)
  // estado: EstadosBrasileiros;
  estado: EstadosBrasileiros;

  @Required()
  numero: number;

  @Property()
  complemento: string;
}

@Schema()
export class CartaoSchema {
  @Required()
  @MinLength(11)
  @MaxLength(14)
  // TODO: Adicionar validador aqui se possível/interessante
  // @Pattern('/\d{3}\.\d{3}\.\d{3}-\d{2}/')
  // @Pattern('/\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/')
  cartao: string;

  @Required()
  @Enum(Cartoes)
  tipo: Cartoes;

  @Required()
  nomeCompleto: string;

  @Required()
  @Format('date')
  dataNascimento: string;

  @Property()
  razaoSocial: string;

  @Property()
  nomeFantasia: string;

}

enum TipoTelefone {
  Residencial = 'Residencial',
  Comercial = 'Comercial',
  Celular = 'Celular'
}

@Schema()
class TelefoneSchema {
  @Enum(TipoTelefone)
  tipo: TipoTelefone

  @Required()
  numero: number;
}

enum TipoPagamento {
  Boleto = 'Boleto',
  CC = 'Cartão de Crédito',
  Pix = 'Pix',
  Criptomoeda = 'Criptomoeda'
}

@Model(generics)
export class Clientes {
  // @ObjectID("id")
  // _id: string;

  @Required()
  cartao: CartaoSchema;

  @Required()
  cep: CEPSchema;

  @Required()
  nome: string;

  @Required()
  @Unique()
  email: string;

  @Required()
  @CollectionOf(TelefoneSchema)
  contato: TelefoneSchema[];

  @Ref(Usuarios)
  @Description('Usuário de acesso ao sistema')
  usuario: Ref<Usuarios>;

  @Enum(TipoPagamento)
  pagamentoPreferencial: TipoPagamento;

  @Default(0)
  @Min(-10000)
  credito: number;

  @Property()
  notasAdm: string;

}
