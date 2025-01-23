import axios from "axios";
import { BaseProvider, type ProviderConfig } from "../base";
import { LUNAR_CRUSH_TOKEN_MAP } from "./tokenMap";

export class LunarCrushProvider extends BaseProvider {
  private readonly baseUrl = "https://lunarcrush.com/api4/public";

  constructor(config: ProviderConfig) {
    super(config, "LunarCrushProvider");
  }

  async getCoin(tokenSymbol: string) {
    const coinId = LUNAR_CRUSH_TOKEN_MAP[tokenSymbol];
    try {
      const response = await fetch(`${this.baseUrl}/coins/${coinId}/v1`, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      }).then((res) => res.json());
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `LunarCrush API Error: ${
            error.response?.data?.message || error.message
          }`
        );
      }
      throw error;
    }
  }

  async getCoins() {
    try {
      const response = await fetch(`${this.baseUrl}/coins/list/v1`, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      }).then((res) => res.json());
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `LunarCrush API Error: ${
            error.response?.data?.message || error.message
          }`
        );
      }
      throw error;
    }
  }

  async getSocialData(topic: string) {
    try {
      const response = await fetch(`${this.baseUrl}/topic/${topic}/v1`, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      }).then((res) => res.json());
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `LunarCrush API Error: ${
            error.response?.data?.message || error.message
          }`
        );
      }
    }
  }
}

export default LunarCrushProvider;
