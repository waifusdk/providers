import { describe, expect, test } from "vitest";
import { DexScreenerProvider, WeatherProvider } from "../../src";

import "dotenv/config";

describe("DexScreener", () => {
  test("getPair", async () => {
    const provider = new DexScreenerProvider();
    const data = await provider.getPair(
      "solana",
      "22UfRTpPjzXCaC4f4eaRRKTesehx7cTDSqcN9u5UykYs"
    );
    expect(data.pairs.length).eq(1);
    expect(data.pair.pairAddress).toBeDefined();
  });

  test("getTokenPairs", async () => {
    const provider = new DexScreenerProvider();
    const data = await provider.getTokenPairs(
      "solana",
      "D4yF6j16FitfzH6e3Q9yYXTwV1tzpy2yGkjouD5Hpump"
    );
    expect(data.length).gte(1);
    expect(data[0].pairAddress).toBeDefined();
  });
});
