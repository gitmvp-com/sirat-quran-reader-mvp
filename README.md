# Sirat Qur'an Reader MVP

A simplified MVP version of [Sirat](https://github.com/mAtiyaaa/sirat) - focusing on the core Qur'an reading feature.

## Features

- 📖 **Qur'an Reader** - Browse and read all 114 Surahs
- 🎨 **Beautiful UI** - Built with React, TypeScript, and Tailwind CSS
- 📱 **Responsive Design** - Works on desktop and mobile
- 🌐 **AlQuran.cloud API** - Fetches Qur'an data from a public API
- ⚡ **Fast & Lightweight** - No authentication, no database required

## Tech Stack

- **React 18.3** - Modern component architecture
- **TypeScript 5.8** - Type-safe development
- **Vite 5.4** - Fast build tool
- **Tailwind CSS 3.4** - Utility-first styling
- **React Router 6.30** - Client-side routing
- **TanStack Query 5.83** - Data fetching and caching
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/gitmvp-com/sirat-quran-reader-mvp.git
cd sirat-quran-reader-mvp

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:8080`

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
sirat-quran-reader-mvp/
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   └── Layout.tsx    # Main layout component
│   ├── pages/
│   │   ├── Home.tsx      # Home page with Surah list
│   │   └── SurahDetail.tsx  # Surah reading page
│   ├── lib/
│   │   └── utils.ts      # Utility functions
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## API

This MVP uses the free [AlQuran.cloud API](https://alquran.cloud/api) to fetch Qur'an data. No API key required.

## Differences from Parent Project

This MVP version simplifies the original Sirat project by:

- ✅ Focusing on **Qur'an Reader** only (core feature)
- ✅ Removing authentication/user accounts
- ✅ Removing Supabase dependency
- ✅ Removing advanced features (Tasbih, Mosque Locator, Holy Cities, etc.)
- ✅ Using the same dependency versions for compatibility
- ✅ Maintaining the clean, modern UI aesthetic

## Parent Project

This is an MVP version of [mAtiyaaa/sirat](https://github.com/mAtiyaaa/sirat) - a comprehensive Islamic web application.

For the full-featured version with authentication, bookmarks, multiple Islamic tools, and more, check out the original project.

## License

MIT License - See LICENSE file for details

## Acknowledgments

- Original project by [mAtiyaaa](https://github.com/mAtiyaaa)
- [AlQuran.cloud](https://alquran.cloud/) for the Qur'an API
- [shadcn/ui](https://ui.shadcn.com/) for UI components
