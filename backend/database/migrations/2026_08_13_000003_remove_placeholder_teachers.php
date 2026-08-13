<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        DB::transaction(function (): void {
            $teacherIds = DB::table('teachers')
                ->whereIn('slug', ['mohamed-samy', 'roqaya-badr', 'mohamed-ebrahim'])
                ->pluck('id');

            DB::table('review_submissions')
                ->whereIn('teacher_id', $teacherIds)
                ->delete();

            DB::table('review_submissions')
                ->where('admin_notes', 'Initial website review migrated into the dashboard.')
                ->delete();

            DB::table('teachers')
                ->whereIn('id', $teacherIds)
                ->delete();
        });

        Cache::forget('public-teachers');
    }

    public function down(): void
    {
        // Placeholder identities must never be restored.
    }
};
