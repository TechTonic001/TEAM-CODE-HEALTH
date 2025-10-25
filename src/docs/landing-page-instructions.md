# Landing Page — Maternal Health Companion Platform

This document explains how to create the initial landing page for the Maternal Health Companion Platform Next.js app. It assumes the project uses the `app/` router (Next.js 13+) and that you have an existing `src/app/layout.js` and `src/app/globals.css`.

## Goals
- Create a responsive hero and features section that presents the app tagline and purpose.
- Add a clear CTA to sign in (placeholder) and to learn more about the modules.
- Keep markup accessible and SEO-friendly.
- Add the page at `/landing` so it doesn't clash with existing root `page.js`.

## Files to create
- `src/app/landing/page.js` — Landing page UI (React Server Component)
- `src/docs/landing-page-instructions.md` — (this file)
- Optionally: `src/app/landing/styles.css` or add classes to `globals.css`.

## Minimal implementation (high-level)
1. Create `src/app/landing/page.js` exporting a default React component with sections:
   - Header / hero with title, tagline, short description.
   - 3–6 feature blocks: Purpose bullets, target users, modules overview.
   - CTA buttons: "Get Started" (link to sign-in route) and "Learn More" (link to `/docs` or modules section).
   - Footer or small contact section.

2. Use semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`.

3. Styling:
   - Prefer utility classes or existing `globals.css` styles.
   - Keep responsive layout with CSS grid or flexbox.
   - Use accessible color contrast and alt text for images.

4. Sign-in CTA:
   - If you'll use NextAuth or another auth provider later, point the CTA to `/api/auth/signin` or create a client-side button that triggers auth.
   - For now, link to `/auth` or `/api/auth/signin` as a placeholder.

## Accessibility & SEO
- Include a descriptive `<title>` in the root `layout.js` or use `metadata` in the page component if you prefer.
- Add `aria-label` for landmark regions if needed.
- Use `<h1>` for the main title and descending headings for sections.

## Assets
- Place logos and images in `/public/` and reference them by `/logo.png`.
- Use optimized images (WebP/AVIF) when possible.

## Example dev commands (PowerShell)
```powershell
# Install dependencies (if you haven't already)
npm install

# Run the dev server
npm run dev
```

## Next steps (after landing page)
- Wire the CTA to an auth flow (NextAuth with Google).
- Add a simple admin/hospital dashboard route for clinics.
- Create modular components for Profile, Health Info, Booking, Payments, Education, and Analytics and keep them in `src/components` or `src/app/(modules)`.

## Notes
- The landing page should be marketing-focused and not expose sensitive user data.
- Keep the layout lightweight for low-bandwidth users.

---
Generated on: October 25, 2025