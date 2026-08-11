<?php

namespace App\Filament\Resources\ReviewSubmissions\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class ReviewSubmissionInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Review details')
                    ->schema([
                        TextEntry::make('teacher'),
                        TextEntry::make('reviewer_name')->label('Reviewer'),
                        TextEntry::make('rating')->suffix(' / 5'),
                        TextEntry::make('locale')->label('Language')->formatStateUsing(fn (string $state): string => strtoupper($state)),
                        TextEntry::make('review')->columnSpanFull(),
                    ])
                    ->columns(2),
                Section::make('Moderation')
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
