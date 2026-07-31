# Alarabiya Academy

A premium, responsive enrollment website for an online Quran and Arabic academy.

## What is included

- Conversion-focused homepage for Google Ads traffic
- Quran Reading, Tajweed & Hifz, Arabic, and Islamic Studies programs
- Responsive desktop, tablet, and mobile layouts
- Accessible navigation, FAQ, and enrollment form
- Hostinger-compatible PHP lead handler
- Privacy and terms pages
- SEO metadata, structured data, sitemap, robots file, social card, and favicons
- Apache caching, compression, HTTPS redirect, and security headers

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The Hostinger-ready static site is generated in `dist/client`.

## Hostinger deployment

1. Update the academy name, real domain, email address, verified claims, and final policies.
2. Set `NEXT_PUBLIC_SITE_URL` to the real domain before building.
3. Update the domain in `public/robots.txt` and `public/sitemap.xml`.
4. Set the Hostinger environment variable `ALARABIYA_ENROLLMENT_EMAIL` to the inbox that should receive leads, or replace the fallback recipient in `public/api/enroll.php`.
5. Upload the contents of `dist/client` into the domain's `public_html` directory.
6. Confirm PHP `mail()` works on the hosting plan, or connect the form to authenticated SMTP.
7. Add Google Analytics and Google Ads conversion IDs only after consent/privacy requirements are finalized.

## Important launch note

`alarabiyaacademy.com` and `hello@alarabiyaacademy.com` are working domain and email assumptions. Replace them if the academy uses different contact details.
