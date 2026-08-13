<?php

use App\Http\Controllers\SiteSettingsController;
use App\Http\Controllers\SubmissionController;
use App\Http\Controllers\TeacherController;
use Illuminate\Support\Facades\Route;

Route::get('/site-settings', SiteSettingsController::class)
    ->middleware('throttle:60,1');

Route::get('/teachers', [TeacherController::class, 'index'])
    ->middleware('throttle:60,1');
Route::get('/teachers/{teacher:slug}', [TeacherController::class, 'show'])
    ->middleware('throttle:60,1');

Route::middleware('throttle:10,1')->group(function (): void {
    Route::post('/enroll', [SubmissionController::class, 'enrollment']);
    Route::post('/reviews', [SubmissionController::class, 'review']);
});
