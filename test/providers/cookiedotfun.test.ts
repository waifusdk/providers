import { describe, expect, test } from "vitest";
import { DexScreenerProvider, WeatherProvider } from "../../src";

import "dotenv/config";
import CookieDotFunProvider from "../../src/providers/cookiedotfun";

describe("CookieDotFun", () => {
  test("getMindshare", async () => {
    const provider = new CookieDotFunProvider({
      apiKey: process.env.COOKIE_DOT_FUN_API_KEY ?? "",
    });
    const data = await provider.getMindshare(
      "22UfRTpPjzXCaC4f4eaRRKTesehx7cTDSqcN9u5UykYs"
    );
    console.log(data);
    expect(data).toBeDefined();
  });
});
