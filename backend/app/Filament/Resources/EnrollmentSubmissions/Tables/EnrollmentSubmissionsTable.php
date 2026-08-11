<?php

namespace App\Filament\Resources\EnrollmentSubmissions\Tables;

use App\Models\EnrollmentSubmission;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\SelectColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class EnrollmentSubmissionsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->searchable()->sortable()->weight('medium'),
                TextColumn::make('email')->searchable()->copyable()->toggleable(),
                TextColumn::make('phone')->label('WhatsApp')->searchable()->copyable(),
                TextColumn::make('program')->badge()->color('info')->searchable(),
                SelectColumn::make('status')
                    ->options(EnrollmentSubmission::STATUS_OPTIONS)
                    ->rules(['required']),
                TextColumn::make('created_at')->label('Submitted')->dateTime()->sortable(),
            ])
            ->filters([
                SelectFilter::make('status')->options(EnrollmentSubmission::STATUS_OPTIONS),
                SelectFilter::make('program')->options(fn (): array => EnrollmentSubmission::query()
                    ->whereNotNull('program')
                    ->distinct()
                    ->orderBy('program')
                    ->pluck('program', 'program')
                    ->all()),
            ])
            ->defaultSort('created_at', 'desc')
            ->recordActions([
                ViewAction::make(),
                EditAction::make(),
            ]);
    }
}
