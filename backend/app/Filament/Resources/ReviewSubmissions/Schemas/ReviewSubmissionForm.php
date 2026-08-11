<?php

namespace App\Filament\Resources\ReviewSubmissions\Schemas;

use App\Models\ReviewSubmission;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class ReviewSubmissionForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Review details')
                    ->schema([
                        TextInput::make('teacher')->disabled(),
                        TextInput::make('reviewer_name')->label('Reviewer')->disabled(),
                        TextInput::make('rating')->suffix('/ 5')->disabled(),
                        TextInput::make('locale')->label('Language')->disabled(),
                        Textarea::make('review')->disabled()->rows(7)->columnSpanFull(),
                    ])
                    ->columns(2),
                Section::make('Moderation')
                    ->schema([
                        Select::make('status')
                            ->options(ReviewSubmission::STATUS_OPTIONS)
                            ->required(),
                        Textarea::make('admin_notes')->label('Private notes')->rows(4)->columnSpanFull(),
                    ]),
            ]);
    }
}
