<?php

namespace App\Http\Controllers;

use App\Models\SiteSetting;
use App\Models\Teacher;
use Illuminate\Http\Response;

class TeacherPageController extends Controller
{
    public function english(Teacher $teacher): Response
    {
        return $this->page($teacher, false);
    }

    public function arabic(Teacher $teacher): Response
    {
        return $this->page($teacher, true);
    }

    private function page(Teacher $teacher, bool $arabic): Response
    {
        abort_unless($teacher->is_active, 404);
        $teacher->load('approvedReviews');

        return response()->view('teachers.show', [
            'teacher' => $teacher,
            'profile' => $teacher->toPublicArray(),
            'arabic' => $arabic,
            'settings' => SiteSetting::current(),
            'stylesheet' => $this->latestFrontendStylesheet(),
        ])->header('Cache-Control', 'public, max-age=30, s-maxage=60, must-revalidate');
    }

    private function latestFrontendStylesheet(): ?string
    {
        $files = glob(public_path('assets/index-*.css')) ?: [];
        usort($files, fn (string $a, string $b): int => filemtime($b) <=> filemtime($a));

        return isset($files[0]) ? asset('assets/'.basename($files[0])) : null;
    }
}
