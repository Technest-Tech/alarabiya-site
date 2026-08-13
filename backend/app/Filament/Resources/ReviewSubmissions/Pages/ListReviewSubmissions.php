<?php

namespace App\Filament\Resources\ReviewSubmissions\Pages;

use App\Filament\Resources\ReviewSubmissions\ReviewSubmissionResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListReviewSubmissions extends ListRecords
{
    protected static string $resource = ReviewSubmissionResource::class;

    protected function getHeaderActions(): array
    {
        return [CreateAction::make()->label('Add feedback')];
    }
}
