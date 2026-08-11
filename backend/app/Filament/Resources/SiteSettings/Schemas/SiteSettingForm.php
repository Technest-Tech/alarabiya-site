<?php

namespace App\Filament\Resources\SiteSettings\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class SiteSettingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Contact details')
                    ->description('These values are shown on the public website. The notification inbox receives new form alerts.')
                    ->schema([
                        TextInput::make('contact_email')
                            ->label('Public contact email')
                            ->email()
                            ->required()
                            ->maxLength(160),
                        TextInput::make('notification_email')
                            ->label('Form notification email')
                            ->email()
                            ->required()
                            ->maxLength(160),
                        TextInput::make('whatsapp_number')
                            ->label('WhatsApp number')
                            ->helperText('Include the country code, for example +20 100 000 0000.')
                            ->tel()
                            ->maxLength(40),
                        Textarea::make('whatsapp_message')
                            ->label('Default WhatsApp message')
                            ->maxLength(500)
                            ->rows(3)
                            ->columnSpanFull(),
                    ])
                    ->columns(2),
                Section::make('Social links')
                    ->description('Leave a field empty to hide that network from the website footer.')
                    ->schema([
                        TextInput::make('facebook_url')->label('Facebook URL')->url()->maxLength(500),
                        TextInput::make('instagram_url')->label('Instagram URL')->url()->maxLength(500),
                        TextInput::make('youtube_url')->label('YouTube URL')->url()->maxLength(500),
                        TextInput::make('tiktok_url')->label('TikTok URL')->url()->maxLength(500),
                    ])
                    ->columns(2),
            ]);
    }
}
