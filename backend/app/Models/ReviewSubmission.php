<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Cache;

class ReviewSubmission extends Model
{
    public const STATUS_OPTIONS = [
        'pending' => 'Pending',
        'approved' => 'Approved',
        'rejected' => 'Rejected',
        'spam' => 'Spam',
    ];

    protected $fillable = [
        'teacher_id',
        'teacher',
        'reviewer_name',
        'reviewer_relationship',
        'reviewer_location',
        'rating',
        'review',
        'locale',
        'status',
        'admin_notes',
        'source_url',
        'ip_address',
        'user_agent',
        'emailed_at',
    ];

    protected function casts(): array
    {
        return [
            'rating' => 'integer',
            'emailed_at' => 'datetime',
        ];
    }

    protected static function booted(): void
    {
        static::saving(function (ReviewSubmission $review): void {
            if ($review->teacher_id && ($teacher = Teacher::query()->find($review->teacher_id))) {
                $review->teacher = "{$teacher->name_en} ({$teacher->slug})";
            }
        });

        static::saved(fn (): bool => Cache::forget('public-teachers'));
        static::deleted(fn (): bool => Cache::forget('public-teachers'));
    }

    public function teacherRecord(): BelongsTo
    {
        return $this->belongsTo(Teacher::class, 'teacher_id');
    }

    public function toPublicArray(): array
    {
        $relationship = $this->reviewer_relationship ?: ($this->locale === 'ar' ? 'طالب أو ولي أمر' : 'Learner or parent');
        $location = $this->reviewer_location ?: ($this->locale === 'ar' ? 'أونلاين' : 'Online');

        return [
            'reviewer' => ['en' => $this->reviewer_name, 'ar' => $this->reviewer_name],
            'relationship' => ['en' => $relationship, 'ar' => $relationship],
            'location' => ['en' => $location, 'ar' => $location],
            'rating' => $this->rating,
            'text' => ['en' => $this->review, 'ar' => $this->review],
        ];
    }
}
