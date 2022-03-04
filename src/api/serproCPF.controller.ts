import { PathParams } from "@tsed/common";
import { Controller } from "@tsed/di";
import { Get } from "@tsed/schema";
import { Axios } from "axios";
import 'dotenv/config'

// TODO: Terminar controlador de acesso à API da Serpro
// WARN: Importar chave de acesso do .env
@Controller({
  path: '/consulta-cpf'
})
export class ConsultaCPF {

  axios: Axios = new Axios;
  private token: string = '';
  private headersAPI = {
    'accept': 'application/json',
    'Authorization': 'Bearer ' + this.token,
  };
  readonly serverToken = 'https://gateway.apiserpro.serpro.gov.br/token';
  readonly serverConsulta: string = 'https://gateway.apiserpro.serpro.gov.br/consulta-cpf-df/v1';
  readonly statusEndp: string = '/status';
  readonly cpfEndp: string = '/cpf/';
  // private chaves: string = 'teste',//process.env.SERPRO_KEY_BASE64,
  // TODO: Substituir chave de autorização
  private readonly headersAuth = {
    'Authorization': 'Basic bkZUNFRSSlVRVXdiRTBfNEFjdDBsRXVveVNNYTpTNEY5Qm5iNTc2OV82ZWtySG1aRWIzT0lBZE1h'
  };
  private readonly data = {
    'grant_type': 'client_credentials'
  }

  constructor(
  ) { }

  async renovaToken() {
    this.token = await this.axios.get(this.serverToken, { headers: this.headersAuth, data: this.data }).then(resposta => {
      // TODO: Conferir retorno
      console.log('RESPOSTA')
      console.log(resposta)
      return resposta.data
    })
      .catch(erro => { console.log(erro) })
  }

  // BUG: Retornando erro 500 não pode converter undefined ou null para object
  @Get('/status')
  async pegaStatus() {
    if (!this.token) {
      await this.renovaToken()
    }
    console.log('BEARER TOKEN')
    console.log(this.headersAPI.Authorization)
    // TODO: Retornar true ou false pelo status do código
    await this.axios.get(this.serverConsulta + this.statusEndp, { headers: this.headersAPI })
      .then(resposta => {
        return resposta
      })
      .catch(erro => {
        console.log(erro)
      })
  }

  @Get('/:cpf')
  async confereCPF(@PathParams('cpf') cpf: string) {
    if (!this.pegaStatus()) {
      this.renovaToken()
    }
    await this.axios.post(this.serverConsulta + this.cpfEndp + cpf, { headers: this.headersAPI })
      .then(resposta => {
        return resposta.data
      })
      .catch(erro => { console.log(erro) })
  }

}
