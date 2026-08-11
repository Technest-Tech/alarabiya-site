<?php

namespace App\Filament\Resources\EnrollmentSubmissions\Schemas;

use App\Models\EnrollmentSubmission;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class EnrollmentSubmissionForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Student details')
                    ->schema([
                        TextInput::make('name')->disabled(),
                        TextInput::make('email')->email()->disabled(),
                        TextInput::make('phone')->label('WhatsApp')->disabled(),
                        TextInput::make('age_group')->disabled(),
                        TextInput::make('program')->disabled(),
                        TextInput::make('locale')->label('Language')->disabled(),
                        Textarea::make('message')
                            ->label('Learning goals')
                            ->disabled()
                            ->rows(5)
                            ->columnSpanFull(),
                    ])
                    ->columns(2),
                Section::make('Follow-up')
                    ->schema([
                        Select::make('status')
                            ->options(EnrollmentSubmission::STATUS_OPTIONS)
                            ->required(),
                        Textarea::make('admin_notes')
                            ->label('Private notes')
                            ->rows(5)
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
