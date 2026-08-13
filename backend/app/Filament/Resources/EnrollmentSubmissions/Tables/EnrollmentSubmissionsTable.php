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
                TextColumn::make('phone')->label('WhatsApp')->searchable()->copyable(),
                TextColumn::make('age_group')->label('Age')->badge()->color('warning')->sortable(),
                TextColumn::make('program')->label('Source / program')->badge()->color('info')->searchable()->toggleable(),
                TextColumn::make('email')->searchable()->copyable()->toggleable(isToggledHiddenByDefault: true),
                SelectColumn::make('status')
                    ->options(EnrollmentSubmission::STATUS_OPTIONS)
                    ->rules(['required']),
                TextColumn::make('created_at')->label('Submitted')->dateTime()->sortable(),
            ])
            ->filters([
                SelectFilter::make('status')->options(EnrollmentSubmission::STATUS_OPTIONS),
            ])
            ->defaultSort('created_at', 'desc')
            ->recordActions([
                ViewAction::make(),
                EditAction::make(),
            ]);
    }
}
