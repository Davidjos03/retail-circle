# Retail Circle OS — Technical Assessment

A monorepo for the **Retail Circle** frontend technical assessment. It contains two client applications that implement the **Leads · In Stock** experience from the Retail Circle OS design system: a **React web app** (built during the Frontend Lead live exercise) and an **Expo / React Native mobile app** for iOS and Android.

All data is mocked locally — there is no backend.

---

## What This Project Is

This repository is a **test assessment submission** for Retail Circle's main product. It demonstrates how the **Leads** workflow can be delivered across web and mobile using a shared design language, component thinking, and mock data.

| App | Folder | Platform | Status |
|-----|--------|----------|--------|
| **Web** | [`react/`](./react/) | Desktop / browser | Built during the **Frontend Lead — Live Exercise** (60 min) |
| **Mobile** | [`mobile/`](./mobile/) | iOS, Android (Expo) | Built during the **Mobile Lead — Live Exercise** (60 min) |

Both apps translate the Figma **Leads · In Stock** frame into working UI with dark-theme design tokens, tabbed navigation, search, filters, and reusable lead card components.

---

## Repository Structure

```
retail-circle/
├── react/          # React + Vite + TypeScript + TailwindCSS (web)
│   └── src/
│       ├── components/   # Layout, leads UI
│       ├── pages/        # Home, Leads, placeholders
│       └── data/         # Mock leads
│
├── mobile/         # Expo SDK 57 + React Native (iOS / Android)
│   └── src/
│       ├── app/          # Expo Router screens (drawer navigation)
│       ├── components/   # LeadCard, FilterSheet, Tabs, etc.
│       ├── theme/        # Design tokens (colors)
│       └── data/         # Mock leads
│
└── README.md
```

---

## Prerequisites

### Web (`react/`)

- **Node.js** 18+ (20 LTS recommended)
- **npm** (or compatible package manager)

### Mobile (`mobile/`)

- **Node.js** 18+ (20 LTS recommended)
- **npm**
- **Expo CLI** (via `npx expo`)
- For device testing:
  - **iOS:** macOS with Xcode Simulator, or [Expo Go](https://expo.dev/go) on a physical iPhone
  - **Android:** Android Studio emulator, or Expo Go on a physical Android device

> Mobile targets **Expo SDK 57**. See the [Expo v57 docs](https://docs.expo.dev/versions/v57.0.0/) for platform-specific setup.

---

## Getting Started

### Web — React Frontend

```bash
cd react
npm install
npm run dev
```

The dev server starts at **http://localhost:3000** (bound to `0.0.0.0` for LAN access).

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server on port 3000 |
| `npm run build` | Type-check and production build |
| `npm run preview` | Preview the production build locally |

**Key routes**

| Path | Screen |
|------|--------|
| `/` | Home — recent leads preview |
| `/leads` | Leads · In Stock (tabs, search, filters, lead cards) |
| `/sell`, `/shop`, `/orders`, … | Placeholder screens (navigation shell) |

---

### Mobile — Expo / React Native

```bash
cd mobile
npm install
npm start
```

Then choose a target from the Expo dev tools:

| Command | Description |
|---------|-------------|
| `npm start` | Start Expo dev server |
| `npm run ios` | Open iOS Simulator (macOS) |
| `npm run android` | Open Android emulator |
| `npm run web` | Run in the browser via React Native Web |

Scan the QR code with **Expo Go** to run on a physical device.

**Key screens** (drawer navigation)

| Screen | Description |
|--------|-------------|
| Home | Landing / recent leads |
| Leads | Leads · In Stock — mobile-adapted layout |
| Sell, Shop, Orders, Stock, … | Placeholder screens |

---

## Features

### Shared (Web + Mobile)

- **Leads · In Stock** screen with Figma-aligned dark tokens
- **Tabbed views:** In Stock, In Consignment, All Leads
- **Search** with optional Smart Match toggle
- **Filter panel** (brand, year, condition, etc.)
- **Reusable `LeadCard`** component — one card, many instances (not six copies)
- **Mock data** — 6+ leads with specs, images, and contact info
- **App shell** — sidebar (web) / drawer (mobile) with placeholder routes

### Mobile Exercise Requirements

The mobile live exercise evaluates translation of a **desktop Figma frame** into a native iPhone experience. Target interactive behaviors include:

1. **Live feed** — new leads arrive in real time; the list must not jump; an **"N new leads"** pill scrolls to the top
2. **Swipe gestures** — swipe left dismisses a card (animated); swipe right opens WhatsApp (deep-link stub)

The project is scaffolded with `react-native-gesture-handler`, `react-native-reanimated`, and `expo-linking` to support these patterns. Check the current `mobile/src` implementation for the latest feature status.

---

## Tech Stack

### Web (`react/`)

| Layer | Technology |
|-------|------------|
| Framework | React 18 |
| Language | TypeScript |
| Build | Vite 5 |
| Styling | TailwindCSS 3 |
| Routing | React Router 6 |
| Icons | Lucide React |

### Mobile (`mobile/`)

| Layer | Technology |
|-------|------------|
| Framework | React Native 0.86 |
| Runtime | Expo SDK 57 |
| Language | TypeScript |
| Navigation | Expo Router (drawer) |
| Gestures / animation | react-native-gesture-handler, react-native-reanimated |
| Images | expo-image |
| Deep links | expo-linking |

---

## Design System

Both apps use dark-theme tokens derived from the **Retail Circle OS Figma** file (not hard-coded pixel values from screenshots).

Mobile tokens live in [`mobile/src/theme/colors.ts`](./mobile/src/theme/colors.ts):

```ts
base: '#141414'
surface: '#1a1a1a'
brand: '#7629f9'
paragraph: '#797979'
// ...
```

The web app mirrors the same palette via Tailwind theme extensions in [`react/tailwind.config.js`](./react/tailwind.config.js).

---

## Assessment Context

This repo supports two timed live exercises:

### Frontend Lead — Live Exercise (~60 min)

- React web implementation of the Leads screen
- Component breakdown, design tokens, empty/loading/error awareness
- Desktop-first layout with responsive grid

### Mobile Lead — Live Exercise (~60 min)

| Phase | Focus |
|-------|-------|
| **Read** (~6 min) | Walk through the Figma frame; component breakdown, tokens, missing states |
| **Build** (~32 min) | Translate desktop design to iPhone; live feed + swipe interactions |
| **Production** (~12 min) | Offline/sync, push & deep links, secure auth, EAS / OTA / App Store path |
| **Architecture** (~10 min) | Shared design system across web and native; Figma token pipeline |

**Evaluation criteria:** finish all stages, native-feeling mobile UX, stable scroll under live feed, gestures on the UI thread, defensible code, and effective use of AI tooling (Cursor / Claude) with human review.

---

## Data & Backend

- All lead data is **static mock data** in `*/src/data/leads.ts`
- No API, authentication, or persistence layer
- Suitable for UI/UX demonstration and live-coding review only

---

## License

Private assessment code — not for public distribution unless authorized by Retail Circle.
