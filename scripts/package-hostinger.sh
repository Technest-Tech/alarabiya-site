#!/usr/bin/env bash

set -euo pipefail

project_root="$(cd "$(dirname "$0")/.." && pwd)"
archive_path="$project_root/alarabiya-laravel-hostinger.zip"

cd "$project_root/backend"

zip -qrFS "$archive_path" . \
  -x '.env' \
  -x 'bootstrap/cache/*.php' \
  -x 'database/database.sqlite' \
  -x '.phpunit.result.cache' \
  -x 'phpunit.xml' \
  -x 'storage/app/frontend-files.json' \
  -x 'storage/framework/cache/*' \
  -x 'storage/framework/sessions/*' \
  -x 'storage/framework/views/*' \
  -x 'storage/logs/*' \
  -x 'tests/*' \
  -x 'vendor/*' \
  -x 'node_modules/*'

# Preserve Laravel's otherwise-empty writable runtime directories in the archive.
zip -q "$archive_path" \
  bootstrap/cache/.gitignore \
  storage/framework/.gitignore \
  storage/framework/cache/.gitignore \
  storage/framework/cache/data/.gitignore \
  storage/framework/sessions/.gitignore \
  storage/framework/testing/.gitignore \
  storage/framework/views/.gitignore \
  storage/logs/.gitignore

echo "Created $archive_path"
