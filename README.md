# Anna AI Recruiter

A complete product-led growth (PLG) website for Anna — an AI Recruiter voice agent for Driver & Logistics companies.

## Features

- **Voice Demo Experience**: Try Anna instantly with an interactive voice demo
- **Trial Signup Flow**: Self-service signup with 10 free AI interview credits
- **Dashboard**: Full-featured dashboard to manage interviews and candidates
- **Pricing & Billing**: Stripe integration for subscription management

## Tech Stack

- **Framework**: Next.js 15+ (App Router, React Server Components)
- **Styling**: TailwindCSS v4 + shadcn/ui
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk (or Magic Links)
- **Voice AI**: Vapi.ai
- **Payments**: Stripe
- **Analytics**: PostHog
- **Email**: Resend
- **SMS**: Twilio

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-org/anna-ai-recruiter.git
cd anna-ai-recruiter
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your credentials:
- Database URL
- Clerk keys
- Vapi keys
- Stripe keys
- Twilio credentials
- PostHog key
- Resend API key

5. Initialize the database:
```bash
npx prisma generate
npx prisma db push
```

6. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (marketing)/        # Public marketing pages
│   ├── (auth)/             # Authentication pages
│   ├── (dashboard)/        # Protected dashboard pages
│   └── api/                # API routes
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── marketing/          # Landing page components
│   ├── demo/               # Demo experience components
│   └── dashboard/          # Dashboard components
├── lib/                    # Utilities and configurations
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript types
└── data/                   # Static data (pricing, features, etc.)
```

## Key Pages

- `/` - Landing page
- `/demo` - Voice demo experience
- `/pricing` - Pricing page
- `/customers` - Customer stories
- `/sign-in` - Sign in
- `/sign-up` - Trial signup
- `/dashboard` - Dashboard overview
- `/interviews` - Interview list
- `/interviews/[id]` - Interview details
- `/roles` - Job roles management
- `/settings` - Account settings
- `/billing` - Subscription & billing

## Environment Variables

See `.env.example` for all required environment variables.

## License

Proprietary - All rights reserved
