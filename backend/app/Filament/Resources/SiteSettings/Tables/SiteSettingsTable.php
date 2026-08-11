<?php

namespace App\Filament\Resources\SiteSettings\Tables;

use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class SiteSettingsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('contact_email')->label('Public email')->copyable(),
                TextColumn::make('notification_email')->label('Notification inbox')->copyable(),
                TextColumn::make('whatsapp_number')->label('WhatsApp')->placeholder('Not configured'),
                TextColumn::make('updated_at')->label('Last updated')->dateTime()->sortable(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ]);
    }
}
