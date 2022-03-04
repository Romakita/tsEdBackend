import { Res } from "@tsed/common";
import { Get } from "@tsed/schema";

export abstract class BaseCRUD {

  constructor(private serv: any) { }

  @Get('/')
  async pegaTudo(@Res() resposta: any): Promise<void> {
    const resultado = await this.serv.query()
    resposta.status(200).send(resultado)
  }
}
