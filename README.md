# W.A.I.F.U Providers

A collection of data providers which can be used to integrate with our SDK, designed to make integrating with different AI agent ecosystems easy and type-safe.

We believe in the open-source model and any contributions, suggestions, issues, or improvements, are welcome!. Contributions are rewarded with $WAIFU tokens. Please refer to our github issues for more details.

## Features

- 🔒 Type-safe API integrations
- 🚀 Easy to use providers
- 🛠 Consistent error handling
- 📦 Modern TypeScript/JavaScript support

## Available Providers

1. Generics
   1. Weather
   2. Headlines
2. Token
   1. LunarCrush
   2. Dexscreener
   3. Whitepaper
3. Networks
   1. Solana
   2. Ethereum

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Create a `.env` file in the root directory with your API keys:

```env
WEATHER_API_KEY=your_openweathermap_key
LUNAR_CRUSH_API_KEY=your_lunarcrush_key
TWITTER_API_KEY=your_twitter_key
```

3. Import and use the providers in your code:

```typescript
import {
  WeatherProvider,
  LunarCrushProvider,
  TwitterProvider,
} from "./providers";

// Initialize providers with your API keys
const lunar = new LunarCrushProvider({
  apiKey: process.env.LUNAR_CRUSH_API_KEY,
});
```

## Running Tests

```bash
pnpm test
```

## Error Handling

All providers implement consistent error handling:

```typescript
try {
  const data = await provider.someMethod();
} catch (error) {
  // Errors include the provider name and specific error message
  // e.g., "Weather API Error: City not found"
}
```

## Contributing

Take a look at our open issues for ideas of providers to be added.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-provider`)
3. Commit your changes (`git commit -m 'Adding amapriv provider'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT

## Support

For support, please open an issue in the GitHub repository.
