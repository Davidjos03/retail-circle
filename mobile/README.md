# Retails Circle OS — Mobile (Expo)

React Native (Expo) port of the web `react/` app. Same dark "Retails Circle OS"
theme and leads UI, adapted to mobile with a bottom-tab navigation instead of the
web sidebar.

## Stack

- [Expo](https://expo.dev) (SDK 57) + [Expo Router](https://docs.expo.dev/router/introduction) (file-based routing)
- React Native + TypeScript
- [`@expo/vector-icons`](https://icons.expo.fyi) (Feather) — mobile equivalent of `lucide-react`
- [`expo-image`](https://docs.expo.dev/versions/latest/sdk/image/) for product images
- [`expo-linear-gradient`](https://docs.expo.dev/versions/latest/sdk/linear-gradient/) for the brand logo

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the dev server

   ```bash
   npx expo start
   ```

   Then press `a` (Android emulator), `i` (iOS simulator — macOS only), `w` (web),
   or scan the QR code with [Expo Go](https://expo.dev/go).

## Project structure

```
src/
  app/                 # Expo Router routes (each file = a bottom tab)
    _layout.tsx        # Dark-themed bottom tab navigator
    index.tsx          # Home
    leads.tsx          # Leads (hero + tabs + search + cards)
    dashboard.tsx      # Dashboard
    settings.tsx       # Settings
  components/          # Header, LeadCard, HeroSection, Tabs, SearchBox
  data/leads.ts        # Mock leads + types
  theme/colors.ts      # Dark theme palette (ported from tailwind.config.js)
```

## Web → React Native mapping

| Web (`react/`)                     | Mobile (`mobile/`)                         |
| ---------------------------------- | ------------------------------------------ |
| `react-router-dom` routes          | Expo Router file-based routes              |
| Left `Sidebar`                     | Bottom tab bar (`app/_layout.tsx`)         |
| Tailwind classes                   | `StyleSheet` + `theme/colors.ts`           |
| `lucide-react` icons               | `@expo/vector-icons` (Feather)             |
| `<img>`                            | `expo-image` `<Image>`                     |
| `<input>` / `<button>`             | `<TextInput>` / `<Pressable>`              |
| CSS gradient logo                  | `expo-linear-gradient`                     |
