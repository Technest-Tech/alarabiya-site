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
                TextColumn::make('teacher')->searchable()->sortable()->wrap(),
                TextColumn::make('reviewer_name')->label('Reviewer')->searchable(),
                TextColumn::make('rating')->suffix('/5')->sortable(),
                TextColumn::make('review')->limit(55)->wrap()->toggleable(),
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
