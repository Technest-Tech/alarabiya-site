#!/usr/bin/env bash

set -euo pipefail

project_root="$(cd "$(dirname "$0")/.." && pwd)"
archive_path="$project_root/alarabiya-laravel-hostinger.zip"

cd "$project_root/backend"

zip -qrFS "$archive_path" . \
  -x '.env' \
  -x 'bootstrap/cache/*.php' \
  -x 'database/database.sqlite' \
  -x 'phpunit.xml' \
  -x 'storage/app/frontend-files.json' \
  -x 'storage/framework/cache/*' \
  -x 'storage/framework/sessions/*' \
  -x 'storage/framework/views/*' \
  -x 'storage/logs/*' \
  -x 'tests/*' \
  -x 'vendor/*' \
  -x 'node_modules/*'

echo "Created $archive_path"
