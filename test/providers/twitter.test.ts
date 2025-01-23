import { describe, expect, test } from "vitest";
import { DexScreenerProvider, WeatherProvider } from "../../src";
import "dotenv/config";
import TwitterProvider from "../../src/providers/twitter";

describe("Twitter", () => {
  test("searchTweets", async () => {
    const provider = new TwitterProvider({
      apiKey: process.env.TWIITER_API_KEY ?? "",
    });
    const data = await provider.searchTweets("ETH");
    expect(data).toBeDefined();
    expect(data.length).toBeGreaterThan(0);
  });
});
