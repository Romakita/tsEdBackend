import { PlatformTest } from "@tsed/common";
import { ConfereCorpoMiddleware } from "./confere-corpo.middleware";

describe("ConfereCorpoMiddleware", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<ConfereCorpoMiddleware>(ConfereCorpoMiddleware);
    // const instance = PlatformTest.invoke<ConfereCorpoMiddleware>(ConfereCorpoMiddleware); // get fresh instance

    expect(instance).toBeInstanceOf(ConfereCorpoMiddleware);
  });
});
