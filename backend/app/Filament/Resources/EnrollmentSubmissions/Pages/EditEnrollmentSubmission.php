<?php

namespace App\Filament\Resources\EnrollmentSubmissions\Pages;

use App\Filament\Resources\EnrollmentSubmissions\EnrollmentSubmissionResource;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditEnrollmentSubmission extends EditRecord
{
    protected static string $resource = EnrollmentSubmissionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            ViewAction::make(),
        ];
    }
}
