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

  // test("getCoins", async () => {
  //   const provider = new LunarCrushProvider({
  //     apiKey: process.env.LUNAR_CRUSH_API_KEY ?? "",
  //   });
  //   const coins = await provider.getCoins();
  //   console.log(coins.length);
  //   const tokenMap: Record<string, number> = {};
  //   for (let coin of coins) {
  //     tokenMap[coin.symbol] = coin.id;
  //   }

  //   // Write to file
  //   const mapPath = path.join(__dirname, '../../src/providers/lunarcrush/tokenMap.ts');
  //   const fileContent = `// Symbol => Coin Id Map\n\nexport const LUNAR_CRUSH_TOKEN_MAP: Record<string, number> = ${JSON.stringify(tokenMap, null, 2)};`;
  //   fs.writeFileSync(mapPath, fileContent);

  //   expect(Object.keys(tokenMap).length).toBeGreaterThan(0);
  // });
});
