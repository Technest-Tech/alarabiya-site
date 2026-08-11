<?php

namespace App\Http\Controllers;

use App\Models\SiteSetting;
use Illuminate\Http\JsonResponse;

class SiteSettingsController extends Controller
{
    public function __invoke(): JsonResponse
    {
        return response()
            ->json(SiteSetting::current()->publicValues())
            ->withHeaders([
                'Cache-Control' => 'public, max-age=30, s-maxage=60, stale-while-revalidate=300',
            ]);
    }
}
