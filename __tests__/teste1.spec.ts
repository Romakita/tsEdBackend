import { PlatformTest } from "@tsed/common";
import SuperTest from "supertest"
import { Server } from "../src/Server";

describe("Server", () => {

  let request: SuperTest.SuperTest<SuperTest.Test>;

  beforeAll(PlatformTest.bootstrap(Server))
  beforeAll(() => {
    request = SuperTest(PlatformTest.callback())
  })

  it("should call GET /api/usuarios", async () => {
    const response = await request.get("/api/usuarios");
    console.log(response)
    expect(response).toBe(true)
  });
});

