import { describe, expect, test } from "vitest";
import { WeatherProvider } from "../../src";

import "dotenv/config";

describe("WeatherProvider", () => {
  test("getWeather", async () => {
    const provider = new WeatherProvider({
      apiKey: process.env.WEATHER_API_KEY ?? "",
    });
    const data = await provider.getWeather("Tokyo");
    expect(data.temperature).toBeGreaterThan(0);
    expect(data.humidity).toBeGreaterThan(0);
    expect(data.description).toBeDefined();
    expect(data.location).toBeDefined();
  });
});
