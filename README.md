# UrbanDrive - Next.js

A modern car rental landing page built with Next.js 14, TypeScript, and Tailwind CSS.

## Project Structure

```
urbandrive/
├── app/
│   ├── globals.css         # Global styles + Tailwind directives
│   ├── layout.tsx          # Root layout with metadata & fonts
│   └── page.tsx            # Main page (assembles all components)
├── components/
│   ├── Navbar.tsx          # Sticky navigation with mobile menu
│   ├── HeroSection.tsx     # Hero banner with background image
│   ├── SearchWidget.tsx    # Pick-up / Date / Time search form
│   ├── ValuePropsSection.tsx  # "Why Choose UrbanDrive" grid
│   ├── FeatureCard.tsx     # Individual feature card component
│   ├── PopularFleetSection.tsx # Cars showcase grid
│   ├── CarCard.tsx         # Individual car card component
│   ├── PromoBannerSection.tsx  # Promotional CTA banner
│   └── Footer.tsx          # Site footer with links & social
├── next.config.js          # Next.js config (image domains)
├── tailwind.config.ts      # Tailwind config with custom theme
├── tsconfig.json           # TypeScript configuration
└── package.json
```

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production
```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Google Fonts** - Space Grotesk + Material Symbols Outlined

## Components Overview

| Component | Description |
|-----------|-------------|
| `Navbar` | Sticky header with logo, nav links, auth buttons, and responsive mobile menu |
| `HeroSection` | Full-width hero with background image, headline, and search widget |
| `SearchWidget` | Interactive form with location, date, time inputs and search CTA |
| `ValuePropsSection` | 4-column grid showcasing key benefits |
| `FeatureCard` | Reusable card with icon, title, and description |
| `PopularFleetSection` | 3-column car showcase with hover effects |
| `CarCard` | Car card with image, name, type, and price badge |
| `PromoBannerSection` | Dark promotional banner with CTA button |
| `Footer` | Multi-column footer with brand, links, and social icons |
