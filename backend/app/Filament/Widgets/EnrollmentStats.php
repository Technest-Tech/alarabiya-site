<?php

namespace App\Filament\Widgets;

use App\Filament\Resources\EnrollmentSubmissions\EnrollmentSubmissionResource;
use App\Filament\Resources\ReviewSubmissions\ReviewSubmissionResource;
use App\Models\EnrollmentSubmission;
use App\Models\ReviewSubmission;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class EnrollmentStats extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('New enrollment leads', EnrollmentSubmission::query()->where('status', 'new')->count())
                ->description('Awaiting first response')
                ->color('warning')
                ->url(EnrollmentSubmissionResource::getUrl()),
            Stat::make('Contacted leads', EnrollmentSubmission::query()->where('status', 'contacted')->count())
                ->description('Follow-up in progress')
                ->color('info')
                ->url(EnrollmentSubmissionResource::getUrl()),
            Stat::make('Enrolled students', EnrollmentSubmission::query()->where('status', 'enrolled')->count())
                ->description('Converted from website leads')
                ->color('success')
                ->url(EnrollmentSubmissionResource::getUrl()),
            Stat::make('Reviews to moderate', ReviewSubmission::query()->where('status', 'pending')->count())
                ->description('Pending approval')
                ->color('warning')
                ->url(ReviewSubmissionResource::getUrl()),
        ];
    }
}
