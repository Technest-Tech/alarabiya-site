<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model
{
    protected $fillable = [
        'contact_email',
        'notification_email',
        'whatsapp_number',
        'whatsapp_message',
        'facebook_url',
        'instagram_url',
        'youtube_url',
        'tiktok_url',
    ];

    public static function defaults(): array
    {
        return [
            'contact_email' => 'hello@alarabiyaacademy.com',
            'notification_email' => 'hello@alarabiyaacademy.com',
            'whatsapp_number' => null,
            'whatsapp_message' => 'Assalamu alaikum, I would like to learn more about Alarabiya Academy.',
            'facebook_url' => null,
            'instagram_url' => null,
            'youtube_url' => null,
            'tiktok_url' => null,
        ];
    }

    public static function current(): self
    {
        return static::query()->first() ?? new static(static::defaults());
    }

    public function whatsappUrl(): ?string
    {
        $number = preg_replace('/\D+/', '', (string) $this->whatsapp_number);

        if (blank($number)) {
            return null;
        }

        $url = "https://wa.me/{$number}";

        if (filled($this->whatsapp_message)) {
            $url .= '?text='.rawurlencode($this->whatsapp_message);
        }

        return $url;
    }

    /** @return array<string, string|null> */
    public function publicValues(): array
    {
        return [
            'contactEmail' => $this->contact_email,
            'whatsappNumber' => $this->whatsapp_number,
            'whatsappUrl' => $this->whatsappUrl(),
            'facebookUrl' => $this->facebook_url,
            'instagramUrl' => $this->instagram_url,
            'youtubeUrl' => $this->youtube_url,
            'tiktokUrl' => $this->tiktok_url,
        ];
    }
}
