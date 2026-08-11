<?php

namespace App\Filament\Resources\ReviewSubmissions;

use App\Filament\Resources\ReviewSubmissions\Pages\EditReviewSubmission;
use App\Filament\Resources\ReviewSubmissions\Pages\ListReviewSubmissions;
use App\Filament\Resources\ReviewSubmissions\Pages\ViewReviewSubmission;
use App\Filament\Resources\ReviewSubmissions\Schemas\ReviewSubmissionForm;
use App\Filament\Resources\ReviewSubmissions\Schemas\ReviewSubmissionInfolist;
use App\Filament\Resources\ReviewSubmissions\Tables\ReviewSubmissionsTable;
use App\Models\ReviewSubmission;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class ReviewSubmissionResource extends Resource
{
    protected static ?string $model = ReviewSubmission::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedStar;

    protected static ?string $navigationLabel = 'Teacher reviews';

    protected static ?string $recordTitleAttribute = 'reviewer_name';

    protected static ?int $navigationSort = 2;

    public static function getNavigationBadge(): ?string
    {
        $count = ReviewSubmission::query()->where('status', 'pending')->count();

        return $count > 0 ? (string) $count : null;
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return 'warning';
    }

    public static function canCreate(): bool
    {
        return false;
    }

    public static function form(Schema $schema): Schema
    {
        return ReviewSubmissionForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return ReviewSubmissionInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ReviewSubmissionsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListReviewSubmissions::route('/'),
            'view' => ViewReviewSubmission::route('/{record}'),
            'edit' => EditReviewSubmission::route('/{record}/edit'),
        ];
    }
}
