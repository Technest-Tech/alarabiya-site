<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class Teacher extends Model
{
    protected $fillable = [
        'slug',
        'image_path',
        'image_url',
        'name_en',
        'name_ar',
        'role_en',
        'role_ar',
        'short_bio_en',
        'short_bio_ar',
        'about_en',
        'about_ar',
        'approach_en',
        'approach_ar',
        'experience_en',
        'experience_ar',
        'qualifications_en',
        'qualifications_ar',
        'focus_en',
        'focus_ar',
        'languages_en',
        'languages_ar',
        'learners_en',
        'learners_ar',
        'course_slugs',
        'sort_order',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'qualifications_en' => 'array',
            'qualifications_ar' => 'array',
            'focus_en' => 'array',
            'focus_ar' => 'array',
            'languages_en' => 'array',
            'languages_ar' => 'array',
            'learners_en' => 'array',
            'learners_ar' => 'array',
            'course_slugs' => 'array',
            'sort_order' => 'integer',
            'is_active' => 'boolean',
        ];
    }

    protected static function booted(): void
    {
        static::saved(function (Teacher $teacher): void {
            Cache::forget('public-teachers');

            if ($teacher->wasChanged('image_path')) {
                static::deleteManagedImage($teacher->getOriginal('image_path'));
            }
        });

        static::deleted(function (Teacher $teacher): void {
            Cache::forget('public-teachers');
            static::deleteManagedImage($teacher->image_path);
        });
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(ReviewSubmission::class);
    }

    public function approvedReviews(): HasMany
    {
        return $this->reviews()->where('status', 'approved')->latest();
    }

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('is_active', true)->orderBy('sort_order')->orderBy('name_en');
    }

    public function getPublicImageUrlAttribute(): string
    {
        if (filled($this->image_path)) {
            return asset(Storage::disk('public')->url($this->image_path));
        }

        if (filled($this->image_url)) {
            return asset(ltrim($this->image_url, '/'));
        }

        return asset('logo-mark.webp');
    }

    public function toPublicArray(): array
    {
        return [
            'id' => $this->getKey(),
            'slug' => $this->slug,
            'image' => $this->public_image_url,
            'name' => ['en' => $this->name_en, 'ar' => $this->name_ar],
            'role' => ['en' => $this->role_en, 'ar' => $this->role_ar],
            'shortBio' => ['en' => $this->short_bio_en, 'ar' => $this->short_bio_ar],
            'about' => ['en' => $this->paragraphs($this->about_en), 'ar' => $this->paragraphs($this->about_ar)],
            'approach' => ['en' => $this->approach_en ?: '', 'ar' => $this->approach_ar ?: ''],
            'experience' => ['en' => $this->experience_en ?: '', 'ar' => $this->experience_ar ?: ''],
            'qualifications' => ['en' => $this->qualifications_en ?? [], 'ar' => $this->qualifications_ar ?? []],
            'focus' => ['en' => $this->focus_en ?? [], 'ar' => $this->focus_ar ?? []],
            'languages' => ['en' => $this->languages_en ?? [], 'ar' => $this->languages_ar ?? []],
            'learners' => ['en' => $this->learners_en ?? [], 'ar' => $this->learners_ar ?? []],
            'courseSlugs' => $this->course_slugs ?? [],
            'reviews' => $this->approvedReviews
                ->map(fn (ReviewSubmission $review): array => $review->toPublicArray())
                ->values()
                ->all(),
        ];
    }

    private function paragraphs(?string $value): array
    {
        if (blank($value)) {
            return [];
        }

        return array_values(array_filter(preg_split('/\R{2,}/u', trim($value)) ?: []));
    }

    private static function deleteManagedImage(?string $path): void
    {
        if (blank($path) || ! str_starts_with($path, 'teachers/')) {
            return;
        }

        Storage::disk('public')->delete($path);
    }
}
