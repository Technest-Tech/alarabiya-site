<?php

namespace App\Filament\Resources\EnrollmentSubmissions\Pages;

use App\Filament\Resources\EnrollmentSubmissions\EnrollmentSubmissionResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewEnrollmentSubmission extends ViewRecord
{
    protected static string $resource = EnrollmentSubmissionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
