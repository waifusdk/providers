import axios from "axios";
import { BaseProvider, type ProviderConfig } from "../base";

export class DexScreenerProvider extends BaseProvider {
  private readonly baseUrl = "https://api.dexscreener.com";

  constructor() {
    super(
      {
        apiKey: "",
      },
      "Dexscreener"
    );
  }

  async getPair(chainId: string, pairId: string) {
    try {
      const response = await axios.get(
        `${this.baseUrl}/latest/dex/pairs/${chainId}/${pairId}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `DexScreener API Error: ${
            error.response?.data?.message || error.message
          }`
        );
      }
      throw error;
    }
  }

  async getTokenPairs(chainId: string, tokenAddress: string) {
    try {
      const response = await axios.get(
        `${this.baseUrl}/token-pairs/v1/${chainId}/${tokenAddress}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `DexScreener API Error: ${
            error.response?.data?.message || error.message
          }`
        );
      }
      throw error;
    }
  }
}

export default DexScreenerProvider;
