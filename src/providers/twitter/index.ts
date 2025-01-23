import { BaseProvider, type ProviderConfig } from "../base";

export class TwitterProvider extends BaseProvider {
  private readonly baseUrl = "https://api.x.com/2";

  constructor(config: ProviderConfig) {
    super(config, "TwitterProvider");
  }

  async searchTweets(query: string) {
    try {
      const response = await fetch(
        `${this.baseUrl}/tweets/search/recent?query=${encodeURIComponent(
          query
        )}`,
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      ).then((res) => res.json());
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Twitter API Error: ${error.message}`);
      }
      throw error;
    }
  }
}

export default TwitterProvider;
