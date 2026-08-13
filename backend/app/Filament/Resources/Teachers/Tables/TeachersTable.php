<?php

namespace App\Filament\Resources\Teachers\Tables;

use App\Models\Teacher;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;

class TeachersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('photo')
                    ->state(fn (Teacher $record): string => $record->public_image_url)
                    ->checkFileExistence(false)
                    ->circular()
                    ->imageSize(52),
                TextColumn::make('name_en')->label('Teacher')->description(fn (Teacher $record): string => $record->role_en)->searchable()->sortable()->weight('bold'),
                TextColumn::make('name_ar')->label('Arabic name')->searchable()->toggleable(),
                TextColumn::make('sort_order')->label('Order')->badge()->color('warning')->sortable(),
                ToggleColumn::make('is_active')->label('On website'),
                IconColumn::make('image_path')->label('Uploaded photo')->boolean(fn (?string $state): bool => filled($state))->toggleable(),
                TextColumn::make('updated_at')->label('Last updated')->since()->sortable(),
            ])
            ->filters([
                TernaryFilter::make('is_active')->label('Website visibility'),
            ])
            ->reorderable('sort_order')
            ->defaultSort('sort_order')
            ->recordActions([
                EditAction::make(),
            ]);
    }
}
