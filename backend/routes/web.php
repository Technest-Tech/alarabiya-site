<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $file = public_path('site/index.html');

    abort_unless(is_file($file), 503, 'The static frontend has not been built. Run npm run build:hostinger from the project root.');

    return response()->file($file, [
        'Cache-Control' => 'public, max-age=60, s-maxage=300, must-revalidate',
    ]);
});

Route::get('/{path}', function (string $path) {
    abort_if(str_contains($path, '..'), 404);

    $file = public_path(trim($path, '/').'/index.html');

    abort_unless(is_file($file), 404);

    return response()->file($file, [
        'Cache-Control' => 'public, max-age=60, s-maxage=300, must-revalidate',
    ]);
})->where('path', '^(?!admin(?:/|$)|livewire(?:/|$)|up$).+');
