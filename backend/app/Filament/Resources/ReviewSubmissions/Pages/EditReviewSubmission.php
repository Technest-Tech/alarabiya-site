<?php

namespace App\Filament\Resources\ReviewSubmissions\Pages;

use App\Filament\Resources\ReviewSubmissions\ReviewSubmissionResource;
use Filament\Actions\DeleteAction;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditReviewSubmission extends EditRecord
{
    protected static string $resource = ReviewSubmissionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            ViewAction::make(),
            DeleteAction::make(),
        ];
    }
}
