<?php

namespace App\Filament\Resources\EnrollmentSubmissions;

use App\Filament\Resources\EnrollmentSubmissions\Pages\EditEnrollmentSubmission;
use App\Filament\Resources\EnrollmentSubmissions\Pages\ListEnrollmentSubmissions;
use App\Filament\Resources\EnrollmentSubmissions\Pages\ViewEnrollmentSubmission;
use App\Filament\Resources\EnrollmentSubmissions\Schemas\EnrollmentSubmissionForm;
use App\Filament\Resources\EnrollmentSubmissions\Schemas\EnrollmentSubmissionInfolist;
use App\Filament\Resources\EnrollmentSubmissions\Tables\EnrollmentSubmissionsTable;
use App\Models\EnrollmentSubmission;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class EnrollmentSubmissionResource extends Resource
{
    protected static ?string $model = EnrollmentSubmission::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedUserGroup;

    protected static ?string $navigationLabel = 'Enrollment leads';

    protected static ?string $modelLabel = 'enrollment lead';

    protected static ?string $recordTitleAttribute = 'name';

    protected static ?int $navigationSort = 1;

    public static function getNavigationBadge(): ?string
    {
        $count = EnrollmentSubmission::query()->where('status', 'new')->count();

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
        return EnrollmentSubmissionForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return EnrollmentSubmissionInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return EnrollmentSubmissionsTable::configure($table);
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
            'index' => ListEnrollmentSubmissions::route('/'),
            'view' => ViewEnrollmentSubmission::route('/{record}'),
            'edit' => EditEnrollmentSubmission::route('/{record}/edit'),
        ];
    }
}
