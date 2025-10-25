# MVP Roadmap & Implementation Instructions — Maternal Health Companion Platform

This document outlines steps to implement an initial MVP for the platform, including authentication (Google), core modules, data model suggestions, and deployment tips.

## Objective
Create a minimum-viable product that:
- Lets users create accounts and sign in with Google.
- Stores user profiles & health data.
- Allows bookings/consultations and basic transactions.
- Provides a simple admin/clinic dashboard for viewing bookings and analytics.

## High-level architecture
- Frontend: Next.js (app router)
- Auth: NextAuth.js with Google provider
- Database: PostgreSQL (production) / SQLite (local dev) via Prisma ORM
- Storage: Public assets in `/public` or external storage in production (S3)
- Optional: Stripe or Paystack for payments (depending on region)

## Tech stack & packages (suggested)
- next
- react
- next-auth
- prisma
- @prisma/client
- bcrypt (if you add email/password later)
- pg (Postgres client) or sqlite3 (dev)

Install example:
```powershell
npm install next react react-dom next-auth prisma @prisma/client
# If using Postgres in dev
npm install pg
```

## Environment variables (add to `.env`)
- DATABASE_URL (e.g., `postgresql://user:pass@host:5432/dbname` or `file:./dev.db` for SQLite)
- NEXTAUTH_URL (e.g., `http://localhost:3000`)
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- NEXTAUTH_SECRET (a random string)

## Google OAuth setup
1. Go to Google Cloud Console and create a new project.
2. Configure OAuth consent screen (internal/external appropriately).
3. Create OAuth credentials and add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
4. Copy the client ID and secret into `.env`.

## Prisma schema (starter model idea)
- User: id, name, email, phone, dob, gender, role, image
- Profile/HealthInfo: userId, bloodGroup, genotype, lmp, conditions, allergies, pregnancies, meds, emergencyNotes
- Booking: id, userId, facilityName, type, serviceType, dateTime, status
- Transaction: id, userId, bookingId, amount, status, paymentMethod, transactionId

A small example skeleton (put in `prisma/schema.prisma`):
```prisma
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id    String @id @default(cuid())
  name  String?
  email String? @unique
  image String?
  role  String  @default("user")
  profile Profile?
  bookings Booking[]
  transactions Transaction[]
}

model Profile {
  id        String @id @default(cuid())
  userId    String @unique
  user      User   @relation(fields: [userId], references: [id])
  phone     String?
  address   String?
  dob       DateTime?
  blood     String?
  genotype  String?
  lmp       DateTime?
  conditions String?
  allergies  String?
}

model Booking { /* simplified fields */ }
model Transaction { /* simplified fields */ }
```

After editing the schema:
```powershell
npx prisma generate
npx prisma migrate dev --name init
```

## NextAuth setup
- Create `src/pages/api/auth/[...nextauth].js` or `src/app/api/auth/[...nextauth]/route.js` depending on your app structure.
- Configure Google provider with client ID & secret.
- Use Prisma adapter for session persistence (optional but recommended).

## Routes & modules
- Public pages: `/`, `/landing`, `/about`
- Auth pages: `/api/auth/*` (NextAuth)
- App pages (protected): `/dashboard`, `/profile`, `/bookings`, `/payments`
- Admin: `/admin` or `/clinic`

Security: protect server-side routes with `getServerSession` (NextAuth) or middleware.

## Offline-first for Health Worker Portal
- Consider using a local storage or IndexedDB library (e.g., localForage) for data capture and sync.
- Implement background sync and conflict resolution.

## Testing & QA
- Add a couple of tests for API routes (Jest + supertest) and key React components (React Testing Library).

## Deployment
- Vercel is a natural host for Next.js apps.
- For Postgres, use a managed DB (Supabase, Render, Railway).
- Add environment variables to the deployment platform.

## Minimal MVP implementation tasks (checklist)
- [ ] Install packages and set up `.env` values
- [ ] Configure Prisma schema & run migration
- [ ] Add NextAuth with Google provider and Prisma adapter
- [ ] Create `Profile` UI and server APIs
- [ ] Create `Booking` flow and transaction recording
- [ ] Simple clinic admin view for bookings
- [ ] Add analytics endpoints for basic metrics

## Try it locally (PowerShell)
```powershell
# start dev server
npm run dev
# open browser at
Start-Process "http://localhost:3000"
```

## Notes & next improvements
- Add SMS/WhatsApp integration for reminders (Twilio, Vonage, or local SMS provider).
- Add payment provider integration and receipts.
- Localize content for Ogbomoso region and make offline workflows resilient.

---
Generated on: October 25, 2025
