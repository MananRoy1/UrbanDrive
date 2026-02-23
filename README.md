# UrbanDrive - Next.js

A modern, full-featured car rental platform built with Next.js 14, TypeScript, Supabase, and Tailwind CSS.

## Features

- **Authentication**: Secure login and signup flows using Supabase Auth, middleware protection, and role-based access.
- **Car Listings & Details**: Browse available cars with functional pagination, filtering, and dedicated car detail pages.
- **Dynamic Booking System**: Select start and end dates, calculate total costs dynamically, and book cars directly.
- **User Dashboard**: Customers can easily view their upcoming and past bookings.
- **Admin Dashboard**: Manage the fleet, track bookings, and view platform metrics, fully protected by admin role checks.
- **Email Notifications**: Automated, beautiful booking confirmations built with React Email and sent via Resend.
- **Responsive UI**: A beautiful, mobile-friendly interface designed with Tailwind CSS and custom components.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router format)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database & Auth**: [Supabase](https://supabase.com/) & Supabase SSR
- **Emails**: [React Email](https://react.email/) & [Resend](https://resend.com/)
- **Charts**: [Recharts](https://recharts.org/) for admin analytics

## Core Project Structure

```text
urbandrive/
├── app/
│   ├── (auth)/             # Login, Signup routing
│   ├── admin/              # Admin dashboard, car management, bookings view
│   ├── api/                # Backend API routes
│   ├── cars/               # Car listings index and individual details [carsId]
│   ├── dashboard/          # User-facing dashboard for past/upcoming bookings
│   ├── globals.css         # Global styles & Tailwind directives
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main landing page
├── components/
│   ├── admin/              # Admin-specific components and data visualization
│   ├── Auth/               # Authentication forms (Login, Register)
│   ├── dashboard/          # User dashboard components
│   ├── details/            # Car details views, Gallery, and Booking Widget
│   ├── listings/           # Car grid, filters, and pagination
│   └── ...                 # Global shared UI components (Navbar, Footer, Hero, etc.)
├── emails/                 # React Email templates (e.g., BookingConfirmation)
├── lib/                    # Shared utilities, constants, and Supabase client config
├── next.config.js          # Next.js configurations
└── tailwind.config.ts      # Tailwind configurations & custom theming
```

## Getting Started

### Prerequisites

You will need a [Supabase](https://supabase.com/) project and a [Resend](https://resend.com/) account for full application functionality.

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up environment variables**
   Create a `.env.local` file in the root directory and add the following keys:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   RESEND_API_KEY=your_resend_api_key
   ```

   _Note: Ensure your database schema matches the expected models for Cars, Bookings, and User Roles._

3. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Email Preview (Optional)**
   To preview email templates simultaneously:
   ```bash
   npm run email
   ```

### Build for Production

```bash
npm run build
npm start
```
