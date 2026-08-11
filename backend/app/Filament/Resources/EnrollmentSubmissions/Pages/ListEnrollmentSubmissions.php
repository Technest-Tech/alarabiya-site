<?php

namespace App\Filament\Resources\EnrollmentSubmissions\Pages;

use App\Filament\Resources\EnrollmentSubmissions\EnrollmentSubmissionResource;
use Filament\Resources\Pages\ListRecords;

class ListEnrollmentSubmissions extends ListRecords
{
    protected static string $resource = EnrollmentSubmissionResource::class;

    protected function getHeaderActions(): array
    {
        return [];
    }
}
