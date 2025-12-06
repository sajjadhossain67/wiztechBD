# WiztecBD - Real Estate Platform

A modern, full-featured real estate website built with Next.js 16, React 19, TypeScript, and Tailwind CSS. This platform allows users to browse, buy, sell, and rent properties with a beautiful and responsive user interface.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Development](#development)
- [Build](#build)
- [Pages Overview](#pages-overview)
- [Components](#components)
- [Styling](#styling)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Features

- **Property Browsing**: Search and filter properties by type, location, price, and amenities
- **Buy/Rent/Sell Pages**: Dedicated pages for different property transaction types
- **Agent Directory**: Browse and connect with real estate agents
- **User Authentication**: Login and signup pages with social authentication (Google & Apple)
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Image Galleries**: Interactive property image galleries with modal view
- **Property Filters**: Advanced filtering system with budget, suburb, property type, and amenities
- **Blog Section**: Real estate tips and news articles
- **Contact Form**: Direct contact form for inquiries
- **Dark Mode Support**: Built-in dark mode theming
- **Analytics**: Vercel Analytics integration

## Tech Stack

### Core
- **Next.js 16.0.7** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety
- **Node.js 20.19.5** - Runtime environment

### Styling
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **PostCSS 8.5** - CSS processing
- **tw-animate-css 1.3.3** - Animation utilities
- **tailwindcss-animate 1.0.7** - Animation plugin
- **class-variance-authority 0.7.1** - Component variants
- **clsx 2.1.1** - Conditional classNames
- **tailwind-merge 2.5.5** - Merge Tailwind classes

### UI Components
- **Radix UI** - Headless UI components including:
  - Accordion, Alert Dialog, Avatar, Checkbox
  - Dialog, Dropdown Menu, Navigation Menu
  - Popover, Progress, Radio Group, Select
  - Slider, Switch, Tabs, Toast, Tooltip
- **Lucide React 0.454.0** - Icon library
- **Sonner 1.7.4** - Toast notifications
- **Vaul 1.1.2** - Drawer component
- **Embla Carousel 8.5.1** - Carousel component
- **Recharts 2.15.4** - Chart library

### Forms & Validation
- **React Hook Form 7.60.0** - Form handling
- **@hookform/resolvers 3.10.0** - Form validation resolvers
- **Zod 3.25.76** - Schema validation

### Utilities
- **date-fns 4.1.0** - Date manipulation
- **react-day-picker 9.8.0** - Date picker
- **next-themes 0.4.6** - Theme management
- **cmdk 1.0.4** - Command menu
- **input-otp 1.4.1** - OTP input
- **react-resizable-panels 2.1.7** - Resizable panels

### Analytics
- **@vercel/analytics** - Web analytics

### Fonts
- **Geist** - Sans-serif font
- **Geist Mono** - Monospace font

## Project Structure

wiztec-bd-website-development/
├── app/ # Next.js App Router pages
│ ├── agents/ # Agent directory page
│ ├── blogs/ # Blog listing page
│ ├── buy/ # Property buying page
│ ├── contact/ # Contact form page
│ ├── login/ # Login page with social auth
│ ├── properties/ # All properties listing
│ ├── rent/ # Property rental page
│ ├── sell/ # Property selling page
│ ├── signup/ # User registration page
│ ├── globals.css # Global styles with CSS variables
│ ├── layout.tsx # Root layout with metadata
│ └── page.tsx # Homepage
├── components/ # React components
│ ├── ui/ # shadcn/ui components
│ │ ├── accordion.tsx
│ │ ├── alert-dialog.tsx
│ │ ├── avatar.tsx
│ │ ├── button.tsx
│ │ ├── card.tsx
│ │ ├── dialog.tsx
│ │ ├── input.tsx
│ │ ├── select.tsx
│ │ ├── toast.tsx
│ │ └── ... (40+ UI components)
│ ├── creator-section.tsx # Homepage creator section
│ ├── footer.tsx # Site footer
│ ├── hero.tsx # Homepage hero section
│ ├── image-gallery-modal.tsx # Property image gallery modal
│ ├── navigation.tsx # Main navigation bar
│ ├── property-card.tsx # Property card component
│ ├── property-filters.tsx # Filter sidebar component
│ ├── revenue-section.tsx # Homepage revenue stats
│ └── theme-provider.tsx # Theme context provider
├── hooks/ # Custom React hooks
│ ├── use-mobile.ts # Mobile detection hook
│ └── use-toast.ts # Toast notification hook
├── lib/ # Utility functions
│ └── utils.ts # Helper functions (cn utility)
├── public/ # Static assets
│ ├── images/ # Image assets
│ ├── wiztecbd-logo.png # Brand logo
│ ├── apple-icon.png # Apple icon
│ ├── icon.svg # Favicon
│ └── ... (placeholder images)
├── styles/ # Additional styles
│ └── globals.css # Alternative global styles
├── .git/ # Git repository
├── .gitignore # Git ignore rules
├── .next/ # Next.js build output
├── node_modules/ # Dependencies
├── components.json # shadcn/ui configuration
├── next.config.mjs # Next.js configuration
├── next-env.d.ts # Next.js TypeScript declarations
├── package.json # Project dependencies
├── package-lock.json # Dependency lock file
├── pnpm-lock.yaml # PNPM lock file
├── postcss.config.mjs # PostCSS configuration
└── tsconfig.json # TypeScript configuration

## Getting Started

### Prerequisites

- **Node.js**: Version 20.19.5 or higher
- **npm**, **yarn**, or **pnpm**: Package manager
- **Python**: Version 3.8+ (for native module compilation, if needed)
- **Visual Studio Build Tools**: (Windows only, for native modules)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/sajjadhossain67/wiztechBD.git
cd wiztec-bd-website-development
2. Install Dependencies
Using npm:

npm install --ignore-scripts



Note: The --ignore-scripts flag bypasses native module compilation if you encounter Python/Visual Studio Build Tools errors.

3. Configure Environment (Optional)
Create a .env.local file in the root directory for environment variables:
# Add any environment variables here
NEXT_PUBLIC_API_URL=your_api_url
Development
Run the development server:

npm run dev
