export interface ProviderConfig {
  apiKey: string;
}

export abstract class BaseProvider {
  protected apiKey: string;
  protected name: string;

  constructor(config: ProviderConfig, name: string) {
    this.apiKey = config.apiKey;
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  protected validateApiKey(): void {
    if (!this.apiKey) {
      throw new Error("API key is required " + this.apiKey);
    }
  }
}
