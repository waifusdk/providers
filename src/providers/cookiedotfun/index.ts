import axios from "axios";
import { BaseProvider, type ProviderConfig } from "../base";

export class CookieDotFunProvider extends BaseProvider {
  private readonly baseUrl = "https://api.cookie.fun/v2";

  constructor(config: ProviderConfig) {
    super(config, "CookieDotFunProvider");
  }

  async getMindshare(tokenAddress: string) {
    try {
      const response = await fetch(
        `${this.baseUrl}/agents/contractAddress/${tokenAddress}?interval=_7Days`,
        {
          headers: {
            Authorization: `x-api-key ${this.apiKey}`,
          },
        }
      ).then((res) => res.json());
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `CookieDotFun API Error: ${
            error.response?.data?.message || error.message
          }`
        );
      }
      throw error;
    }
  }
}

export default CookieDotFunProvider;
