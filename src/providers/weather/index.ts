import axios from "axios";
import { BaseProvider, type ProviderConfig } from "../base";

export interface WeatherData {
  temperature: number;
  humidity: number;
  description: string;
  location: string;
}

export class WeatherProvider extends BaseProvider {
  private readonly API_BASE_URL = "https://api.openweathermap.org/data/2.5";

  constructor(config: ProviderConfig) {
    super(config, "Weather");
  }

  async getWeather(city: string): Promise<WeatherData> {
    this.validateApiKey();

    try {
      const response = await axios.get(`${this.API_BASE_URL}/weather`, {
        params: {
          q: city,
          appid: this.apiKey,
        },
      });

      const data = response.data;
      return {
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        location: data.name,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `Weather API Error: ${error.response?.data?.message || error.message}`
        );
      }
      throw error;
    }
  }
}
