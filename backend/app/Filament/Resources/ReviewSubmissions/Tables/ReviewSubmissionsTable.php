<?php

namespace App\Filament\Resources\ReviewSubmissions\Tables;

use App\Models\ReviewSubmission;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\SelectColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class ReviewSubmissionsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('teacherRecord.name_en')->label('Teacher')->searchable()->sortable()->wrap()->weight('bold'),
                TextColumn::make('reviewer_name')->label('Reviewer')->searchable(),
                TextColumn::make('rating')->formatStateUsing(fn (int $state): string => str_repeat('★', $state))->color('warning')->sortable(),
                TextColumn::make('review')->limit(55)->wrap()->toggleable(isToggledHiddenByDefault: true),
                SelectColumn::make('status')
                    ->options(ReviewSubmission::STATUS_OPTIONS)
                    ->rules(['required']),
                TextColumn::make('created_at')->label('Submitted')->dateTime()->sortable(),
            ])
            ->filters([
                SelectFilter::make('status')->options(ReviewSubmission::STATUS_OPTIONS),
            ])
            ->defaultSort('created_at', 'desc')
            ->recordActions([
                ViewAction::make(),
                EditAction::make(),
            ]);
    }
}
