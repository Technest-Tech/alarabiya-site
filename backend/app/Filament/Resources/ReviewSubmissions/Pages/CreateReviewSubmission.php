<?php

namespace App\Filament\Resources\ReviewSubmissions\Pages;

use App\Filament\Resources\ReviewSubmissions\ReviewSubmissionResource;
use Filament\Resources\Pages\CreateRecord;

class CreateReviewSubmission extends CreateRecord
{
    protected static string $resource = ReviewSubmissionResource::class;
}
