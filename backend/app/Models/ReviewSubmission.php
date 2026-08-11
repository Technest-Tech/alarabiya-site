<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReviewSubmission extends Model
{
    public const STATUS_OPTIONS = [
        'pending' => 'Pending',
        'approved' => 'Approved',
        'rejected' => 'Rejected',
        'spam' => 'Spam',
    ];

    protected $fillable = [
        'teacher',
        'reviewer_name',
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
}
