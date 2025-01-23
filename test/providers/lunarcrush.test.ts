import { describe, expect, test } from "vitest";
import { DexScreenerProvider, WeatherProvider } from "../../src";
import "dotenv/config";
import LunarCrushProvider from "../../src/providers/lunarcrush";

describe("LunarCrush", () => {
  test("getCoin", async () => {
    const provider = new LunarCrushProvider({
      apiKey: process.env.LUNAR_CRUSH_API_KEY ?? "",
    });
    const data = await provider.getCoin("ETH");
    expect(data.name).toBeDefined();
    expect(data.symbol).toBeDefined();
    expect(data.price).toBeDefined();
  });
});
