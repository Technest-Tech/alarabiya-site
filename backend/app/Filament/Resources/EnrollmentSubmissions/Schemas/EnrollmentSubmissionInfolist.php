<?php

namespace App\Filament\Resources\EnrollmentSubmissions\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class EnrollmentSubmissionInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Student details')
                    ->schema([
                        TextEntry::make('name'),
                        TextEntry::make('email')->copyable(),
                        TextEntry::make('phone')->label('WhatsApp')->copyable(),
                        TextEntry::make('age_group'),
                        TextEntry::make('program')->badge()->color('info'),
                        TextEntry::make('locale')->label('Language')->formatStateUsing(fn (string $state): string => strtoupper($state)),
                        TextEntry::make('message')
                            ->label('Learning goals')
                            ->placeholder('Not provided')
                            ->columnSpanFull(),
                    ])
                    ->columns(2),
                Section::make('Follow-up')
                    ->schema([
                        TextEntry::make('status')->badge(),
                        TextEntry::make('created_at')->label('Submitted')->dateTime(),
                        TextEntry::make('emailed_at')->label('Notification sent')->dateTime()->placeholder('Email was not sent'),
                        TextEntry::make('source_url')->label('Source page')->url(fn (?string $state): ?string => $state)->openUrlInNewTab()->placeholder('Unknown'),
                        TextEntry::make('admin_notes')->label('Private notes')->placeholder('No notes yet')->columnSpanFull(),
                    ])
                    ->columns(2),
            ]);
    }
}
