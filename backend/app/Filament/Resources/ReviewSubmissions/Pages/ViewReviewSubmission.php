<?php

namespace App\Filament\Resources\ReviewSubmissions\Pages;

use App\Filament\Resources\ReviewSubmissions\ReviewSubmissionResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewReviewSubmission extends ViewRecord
{
    protected static string $resource = ReviewSubmissionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
