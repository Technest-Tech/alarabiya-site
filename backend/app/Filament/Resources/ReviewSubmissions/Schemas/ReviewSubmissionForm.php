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
                        Select::make('teacher_id')
                            ->label('Teacher')
                            ->relationship('teacherRecord', 'name_en')
                            ->searchable()
                            ->preload()
                            ->required(),
                        TextInput::make('reviewer_name')->label('Reviewer')->required()->maxLength(100),
                        TextInput::make('reviewer_relationship')->label('Learner / relationship')->maxLength(160),
                        TextInput::make('reviewer_location')->label('Location')->maxLength(160),
                        Select::make('rating')->options([5 => '5 stars', 4 => '4 stars', 3 => '3 stars', 2 => '2 stars', 1 => '1 star'])->required(),
                        Select::make('locale')->label('Language')->options(['en' => 'English', 'ar' => 'Arabic'])->required(),
                        Textarea::make('review')->required()->minLength(30)->maxLength(1500)->rows(7)->columnSpanFull(),
                    ])
                    ->columns(2),
                Section::make('Moderation')
                    ->schema([
                        Select::make('status')
                            ->options(ReviewSubmission::STATUS_OPTIONS)
                            ->default('approved')
                            ->required(),
                        Textarea::make('admin_notes')->label('Private notes')->rows(4)->columnSpanFull(),
                    ]),
            ]);
    }
}
