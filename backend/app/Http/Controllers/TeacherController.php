<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;

class TeacherController extends Controller
{
    public function index(): JsonResponse
    {
        $teachers = Cache::remember('public-teachers', now()->addMinute(), fn (): array => Teacher::query()
            ->published()
            ->with('approvedReviews')
            ->get()
            ->map(fn (Teacher $teacher): array => $teacher->toPublicArray())
            ->all());

        return response()->json($teachers)->header('Cache-Control', 'public, max-age=30, s-maxage=60, must-revalidate');
    }

    public function show(Teacher $teacher): JsonResponse
    {
        abort_unless($teacher->is_active, 404);

        $teacher->load('approvedReviews');

        return response()->json($teacher->toPublicArray())
            ->header('Cache-Control', 'public, max-age=30, s-maxage=60, must-revalidate');
    }
}
