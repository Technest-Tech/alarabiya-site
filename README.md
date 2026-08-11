# Alarabiya Academy

Alarabiya Academy uses a prebuilt Next/Vite frontend with a Laravel 12 and Filament 5 backend. The production server only needs PHP and MySQL; Node.js is used locally to compile the static frontend and is not required on Hostinger.

## What is included

- Responsive English and Arabic academy website
- Laravel endpoints that validate and store every enrollment and review submission
- Synchronous SMTP notifications with submissions retained when email delivery fails
- Filament dashboard at `/admin`
- Lead statuses: new, contacted, enrolled, closed, and spam
- Teacher-review moderation statuses
- Editable public contact email, notification inbox, WhatsApp number/message, and social links
- Honeypot and request rate limiting for public forms
- Hostinger shared-hosting build and packaging scripts

## Architecture

The frontend remains static for speed and SEO. Laravel handles `/api/*`, `/admin`, email, and database work. The public frontend fetches `/api/site-settings` after load so contact and social details changed in Filament appear without rebuilding the site.

This hybrid approach avoids a frontend rewrite and does not require a Node.js process, queue worker, Redis, or VPS in production.

## Local setup

Requirements: Node.js 22+, PHP 8.2+, Composer 2, and the PHP extensions required by Laravel.

```bash
npm install
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan make:filament-user
```

For frontend-only design work:

```bash
npm run dev
```

To test the complete website, API, and dashboard through Laravel:

```bash
npm run build:hostinger
cd backend
php artisan serve
```

Then open `http://127.0.0.1:8000` and `http://127.0.0.1:8000/admin`.

## Tests

```bash
npm test
npm run test:backend
```

## Hostinger shared-hosting deployment

Hostinger shared hosting supports Laravel 12 and Composer 2. Set the website to PHP 8.2 or newer and create a MySQL database and an email mailbox first.

1. On your local machine, create the upload archive:

   ```bash
   npm run package:hostinger
   ```

2. Upload `alarabiya-laravel-hostinger.zip` to the domain's `public_html` directory and extract it there. The included root `.htaccess` internally routes requests to Laravel's `public` directory while keeping clean URLs.
3. Open Hostinger SSH, change into `public_html`, and install production PHP packages:

   ```bash
   composer2 install --no-dev --optimize-autoloader
   cp .env.example .env
   php artisan key:generate
   ```

4. Edit `.env` with the real domain, Hostinger MySQL credentials, and SMTP mailbox credentials. Keep `APP_DEBUG=false`, `QUEUE_CONNECTION=sync`, and `APP_ENV=production`.
5. Finish setup:

   ```bash
   php artisan migrate --seed --force
   php artisan make:filament-user
   php artisan optimize
   ```

6. Sign in at `https://your-domain.com/admin`, open **Site settings**, and enter the real email, WhatsApp number, and social URLs.
7. Submit one real test form and confirm that it appears under **Enrollment leads** and reaches the configured notification inbox.

No `npm install`, `npm run`, Node.js server, cron job, or queue worker is needed on Hostinger. Rebuild and re-upload the package only when frontend code changes; dashboard setting changes are immediate.

## Mail settings

The dashboard manages public and recipient email addresses. SMTP credentials stay in `.env` so they are not exposed to admin pages or the public API. Hostinger defaults are included in `.env.example`; replace the mailbox and password before launch.

## Important launch note

`alarabiyaacademy.com` and `hello@alarabiyaacademy.com` are working assumptions. Replace them with the academy's final domain and mailbox, and have the privacy policy and terms reviewed for the operating country and actual business practices.
