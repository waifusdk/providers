# W.A.I.F.U Providers

A collection of TypeScript providers for various APIs, designed to make integrating with different services easy and type-safe.

## Features

- 🔒 Type-safe API integrations
- 🚀 Easy to use providers
- 🛠 Consistent error handling
- 📦 Modern TypeScript/JavaScript support

## Available Providers

1. Generics
   1.

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
const weather = new WeatherProvider({ apiKey: process.env.WEATHER_API_KEY });
const lunar = new LunarCrushProvider({
  apiKey: process.env.LUNAR_CRUSH_API_KEY,
});
```

## Running Tests

```bash
pnpm test
```

## Development

### Building the Package

To build the package for both CommonJS and ESM formats:

```bash
pnpm build
```

### Releasing

We use changesets for versioning and publishing. To release a new version:

```bash
pnpm release
```

This will:
1. Build the package
2. Publish to the registry with the new version

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

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-provider`)
3. Commit your changes (`git commit -m 'Adding amapriv provider'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT

## Support

For support, please open an issue in the GitHub repository.
