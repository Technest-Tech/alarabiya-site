<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EnrollmentSubmission extends Model
{
    public const STATUS_OPTIONS = [
        'new' => 'New',
        'contacted' => 'Contacted',
        'enrolled' => 'Enrolled',
        'closed' => 'Closed',
        'spam' => 'Spam',
    ];

    protected $fillable = [
        'name',
        'email',
        'phone',
        'age_group',
        'program',
        'message',
        'locale',
        'status',
        'admin_notes',
        'source_url',
        'ip_address',
        'user_agent',
        'consented_at',
        'emailed_at',
    ];

    protected function casts(): array
    {
        return [
            'consented_at' => 'datetime',
            'emailed_at' => 'datetime',
        ];
    }
}
