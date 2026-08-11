<?php

use App\Http\Controllers\SiteSettingsController;
use App\Http\Controllers\SubmissionController;
use Illuminate\Support\Facades\Route;

Route::get('/site-settings', SiteSettingsController::class)
    ->middleware('throttle:60,1');

Route::middleware('throttle:10,1')->group(function (): void {
    Route::post('/enroll', [SubmissionController::class, 'enrollment']);
    Route::post('/reviews', [SubmissionController::class, 'review']);
});
