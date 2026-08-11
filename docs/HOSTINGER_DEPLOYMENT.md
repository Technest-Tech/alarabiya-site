# Hostinger Production Deployment

This document is the operations guide for the Alarabiya Academy production site at [https://alrabiyaacademy.com](https://alrabiyaacademy.com).

It deliberately excludes passwords, private SSH identifiers, and database credentials because this repository is public. The real secrets exist only in the production `.env` file, which has mode `600`.

## Deployment record

- Initial Laravel deployment: August 11, 2026
- Static-delivery and favicon optimization: August 11, 2026
- Git branch: `codex/laravel-filament`
- Domain: `alrabiyaacademy.com`
- Admin: `https://alrabiyaacademy.com/admin`
- Settings API: `https://alrabiyaacademy.com/api/site-settings`
- Hosting: Hostinger shared web hosting
- Application: Laravel 12.65 with Filament 5.7
- Production PHP: PHP 8.3 for web requests; PHP 8.2 for SSH/CLI commands
- Composer: Composer 2.9 via `composer2`
- Production Node.js process: none
- Queue worker: none; `QUEUE_CONNECTION=sync`
- Verified final archive checksum (SHA-256): `ef2c7fa4f74187ba2a342912549d8fe5fee1fbbf5444a160cfa4cd79a5ac0587`
- Verified performance-release archive checksum (SHA-256): `b03f497e224b722f2e58f0a517c2accd75c2fad0e0860655eecaee4e06870100`

The initial Hostinger placeholder site was copied to:

```text
domains/alrabiyaacademy.com/backups/public_html-before-laravel-20260811-1651/
```

The prepared release, including its production dependencies and environment, is retained at:

```text
domains/alrabiyaacademy.com/releases/20260811-1651/
```

The verified final deployment ZIP is retained outside the web root at:

```text
domains/alrabiyaacademy.com/alarabiya-deploy-20260811-final.zip
```

The performance release, its pre-deployment backup, and its reproducible ZIP are retained at:

```text
domains/alrabiyaacademy.com/releases/20260811-1745-performance/
domains/alrabiyaacademy.com/backups/public_html-before-performance-20260811-1745/
domains/alrabiyaacademy.com/alarabiya-deploy-20260811-performance-final.zip
```

These locations are outside `public_html` and are not web-accessible.

## Production architecture

The frontend is compiled locally into static HTML, CSS, JavaScript, fonts, and images. Apache serves the generated pages and assets directly, while Laravel handles only dynamic work:

- `/api/enroll` validates and stores student enrollment submissions.
- `/api/reviews` validates and stores teacher reviews for moderation.
- `/api/site-settings` exposes only safe public contact and social values.
- `/admin` provides the authenticated Filament dashboard.
- MySQL stores users, sessions, cache entries, submissions, reviews, and site settings.
- Email is synchronous, so no cron job, Redis server, or queue worker is required.

Apache first reads the root `.htaccess`. The homepage and prebuilt clean page routes are rewritten directly to their static HTML files, and real assets under Laravel's `public` directory are also served directly. Requests for `/api`, `/admin`, Livewire, and non-static fallbacks are routed through `public/index.php`. This keeps normal page views out of PHP and prevents unnecessary Laravel sessions while private Laravel files and dotfiles remain inaccessible from the web.

## Performance and cache policy

The production optimizations are designed for Hostinger shared hosting and require no Node.js process:

- Prebuilt HTML is compressed by Apache and cached for five minutes with revalidation.
- Hashed CSS and JavaScript retain long-lived caching; images are cached for one month.
- Public site settings are browser-cached for 30 seconds, edge-cached for 60 seconds, and may be served stale while they refresh.
- The settings request is aborted after 2.5 seconds, leaving the static fallback contact details usable if PHP or MySQL is temporarily busy.
- Generated pages do not eagerly preload every font file; fonts load only when the rendered CSS needs them.
- The favicon set contains ICO, 16px, 32px, Apple touch, 192px, and 512px variants cropped from the academy logo. The ICO link includes a version query to bypass the previously cached empty icon.

Do not change HTML back to `no-store`: it makes every page view bypass the CDN and boot Laravel. When public contact or social settings change, the API cache expires automatically within one minute at the edge.

## Production filesystem

Use the Hostinger SSH values stored in the team's password manager:

```bash
ssh -p 65002 <hostinger-user>@<hostinger-host>
cd domains/alrabiyaacademy.com/public_html
```

The Laravel project is installed directly inside `public_html` because the included root `.htaccess` safely forwards public requests into Laravel's `public` directory.

Important locations:

```text
public_html/.env                  Production secrets and environment values
public_html/.htaccess             Shared-hosting front-controller routing
public_html/public/               Public files and compiled frontend
public_html/storage/logs/         Laravel application logs
public_html/storage/framework/    Laravel cache, session, and view runtime data
public_html/bootstrap/cache/      Laravel optimized bootstrap files
```

Required permissions:

```bash
chmod 600 .env
chmod -R ug+rwX storage bootstrap/cache
```

Never place `.env`, SQL backups, deployment archives, or private keys inside `public/`.

## Environment configuration

The production `.env` uses these non-secret settings:

```dotenv
APP_NAME="Alarabiya Academy"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://alrabiyaacademy.com

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306

SESSION_DRIVER=database
CACHE_STORE=database
QUEUE_CONNECTION=sync
MAIL_MAILER=log
```

The actual `APP_KEY`, database name, database user, and database password must stay in `.env`. The production database and user use Hostinger's account-prefixed identifiers, not the short labels displayed when they were initially supplied.

After every `.env` change, rebuild Laravel's cached configuration:

```bash
php artisan optimize:clear
php artisan optimize
```

## Filament administrator

The first administrator uses `admin@alrabiyaacademy.com`. Its initial password was delivered separately and is not stored in Git or this document.

Sign in at `https://alrabiyaacademy.com/admin`. After the first login, replace the initial password with a unique password kept in the team's password manager.

To create a replacement administrator over SSH:

```bash
cd domains/alrabiyaacademy.com/public_html
php artisan make:filament-user
```

The dashboard contains:

- Enrollment leads, including contact data, program, status, consent time, and source metadata
- Teacher reviews with moderation status
- Site settings for public email, notification recipient, WhatsApp number/message, and social links
- Summary counts for recent submissions

## Enable production email

Email is initially set to `MAIL_MAILER=log` because no mailbox password was supplied during deployment. All form submissions are still stored in MySQL and visible in Filament. With the log mailer, notification messages are written to `storage/logs/laravel.log` instead of being sent.

Create or choose the production mailbox in Hostinger, then edit `.env`:

```dotenv
MAIL_MAILER=smtp
MAIL_SCHEME=tls
MAIL_HOST=smtp.hostinger.com
MAIL_PORT=587
MAIL_USERNAME=hello@alarabiyaacademy.com
MAIL_PASSWORD=<mailbox-password>
MAIL_FROM_ADDRESS=hello@alarabiyaacademy.com
MAIL_FROM_NAME="${APP_NAME}"
```

Apply the change and test one real form:

```bash
php artisan optimize:clear
php artisan optimize
tail -n 100 storage/logs/laravel.log
```

In Filament, set both the public contact email and notification recipient under **Site settings**. SMTP credentials always remain in `.env` and are never editable through the dashboard.

## Build and deploy an update

Node.js is required only on the developer machine. It is not required on Hostinger.

From the repository root:

```bash
npm install
npm test
npm run test:backend
npm run package:hostinger
shasum -a 256 alarabiya-laravel-hostinger.zip
```

Upload the archive outside `public_html`, create a timestamped release, install production dependencies, and restore the runtime directories if an older archive was used:

```bash
ssh -p 65002 <hostinger-user>@<hostinger-host>

domain_root="$PWD/domains/alrabiyaacademy.com"
release="$domain_root/releases/YYYYMMDD-HHMM"

mkdir -p "$release"
unzip -q "$domain_root/alarabiya-deploy-YYYYMMDD.zip" -d "$release"
cd "$release"

mkdir -p storage/framework/cache/data storage/framework/sessions storage/framework/views storage/framework/testing storage/logs bootstrap/cache
chmod -R ug+rwX storage bootstrap/cache
composer2 install --no-dev --optimize-autoloader --no-interaction
```

Copy the existing production environment into the release and prepare the database:

```bash
cp "$domain_root/public_html/.env" "$release/.env"
chmod 600 "$release/.env"
php artisan optimize:clear
php artisan migrate --force
```

Before switching, back up the current web root:

```bash
backup="$domain_root/backups/public_html-YYYYMMDD-HHMM"
mkdir -p "$backup"
cp -a "$domain_root/public_html/." "$backup/"
```

Publish the release and optimize it:

```bash
rsync -a --delete "$release/" "$domain_root/public_html/"
cd "$domain_root/public_html"
chmod 600 .env
chmod -R ug+rwX storage bootstrap/cache
php artisan optimize
```

Do not run `php artisan key:generate` during a normal update. Replacing `APP_KEY` would invalidate sessions and make previously encrypted application data unreadable.

## Cache handling after deployment

Static HTML uses a five-minute revalidation policy. Versioned CSS and JavaScript remain long-cache assets, images use a one-month expiry, and favicon files revalidate after five minutes.

After changing routes, redirects, or static files, clear both Hostinger cache layers:

1. Open hPanel → **Websites** → `alrabiyaacademy.com` → **Dashboard**.
2. Open **Advanced → Cache Manager** and choose **Purge All**.
3. If Hostinger CDN is active, open **Performance → CDN** and choose **Flush cache**.
4. Verify the site in a private browser window.

Cache Manager and Hostinger CDN are separate systems. Purging only one can leave stale redirects or HTML at an edge location.

## Verification checklist

After every production update, verify:

```text
GET  /                    200
GET  /ar                  200
GET  /privacy             200
GET  /terms               200
GET  /api/site-settings   200 JSON
GET  /admin               302 to /admin/login
GET  /admin/login         200
POST /api/enroll          200 after valid data
POST /api/reviews         200 after valid data
```

The initial deployment completed these checks. A labeled enrollment and review were stored successfully, verified in MySQL, and removed afterward. Production started with zero enrollment submissions, zero review submissions, and one administrator.

Useful server checks:

```bash
php artisan about --only=environment
php artisan migrate:status
php artisan route:list
tail -n 100 storage/logs/laravel.log
```

Confirm these production values in `php artisan about`:

- Environment: `production`
- Debug mode: `OFF`
- Maintenance mode: `OFF`
- URL: `alrabiyaacademy.com`

## Database backup

Create database backups outside `public_html`. Use the real prefixed database identifiers from `.env`, and let MySQL prompt for the password:

```bash
cd domains/alrabiyaacademy.com/backups
mysqldump -h 127.0.0.1 -u <production-db-user> -p <production-db-name> > alrabiyaacademy-YYYYMMDD-HHMM.sql
chmod 600 alrabiyaacademy-YYYYMMDD-HHMM.sql
```

Back up the database before migrations that alter or remove existing columns or tables.

## Rollback

For a code-only rollback, synchronize a known-good release or timestamped backup back into `public_html`:

```bash
domain_root="$PWD/domains/alrabiyaacademy.com"
rollback_source="$domain_root/releases/<known-good-release>"

rsync -a --delete "$rollback_source/" "$domain_root/public_html/"
cd "$domain_root/public_html"
chmod 600 .env
chmod -R ug+rwX storage bootstrap/cache
php artisan optimize:clear
php artisan optimize
```

Do not automatically roll back database migrations after the site has accepted real submissions. Restore a verified SQL backup only when the migration itself must be reversed and the data impact is understood.

After any rollback, purge Hostinger Cache Manager and CDN cache, then repeat the verification checklist.

## Security and maintenance

- Keep `APP_DEBUG=false` in production.
- Never commit `.env`, passwords, SQL exports, or deployment archives.
- Rotate any credential shared through an insecure channel, then update `.env` and run `php artisan optimize`.
- Keep PHP at a Laravel-supported version in hPanel.
- Test dependency upgrades locally before uploading a new archive.
- Review `storage/logs/laravel.log` after releases and failed email tests.
- Retain at least one known-good application release and a recent database backup outside `public_html`.
- Remove obsolete archives and releases only after a newer release and backup have been verified.
