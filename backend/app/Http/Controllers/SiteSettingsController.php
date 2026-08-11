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
                'Cache-Control' => 'no-store',
            ]);
    }
}
