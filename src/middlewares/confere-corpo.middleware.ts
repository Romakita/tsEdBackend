import { Middleware, MiddlewareMethods } from "@tsed/platform-middlewares";
import { Context } from "@tsed/platform-params";

@Middleware()
export class ConfereCorpoMiddleware implements MiddlewareMethods {
  use(@Context() ctx: Context) {
    if (!ctx.body) throw new Error('Nenhum corpo na mensagem para requisição POST.')
  }
}
