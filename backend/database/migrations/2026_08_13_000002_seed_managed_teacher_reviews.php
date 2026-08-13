<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        $teachers = DB::table('teachers')->pluck('id', 'slug');
        $now = now();

        $reviews = [
            ['mohamed-samy', 'Adam R.', 'Adult Quran learner', 'United Kingdom', 5, 'The lessons are calm and well organized. Mohamed listens carefully to my recitation, explains one correction at a time, and gives me a clear practice goal for the week.', 'en'],
            ['mohamed-samy', 'والدة إبراهيم', 'والدة طالب', 'كندا', 5, 'أصبح ابني مرتاحاً في طرح الأسئلة ولم يعد يقلق عندما يخطئ. ساعدته الخطة الفردية على القراءة بثقة أكبر بصورة ملحوظة.', 'ar'],
            ['roqaya-badr', 'Aisha T.', 'Teen Quran learner', 'United Kingdom', 5, 'Roqaya explains things in a friendly way and gives me enough time to repeat difficult sounds. I can see progress in my reading without feeling rushed.', 'en'],
            ['roqaya-badr', 'والدة مريم', 'والدة طالبة', 'أيرلندا', 5, 'الحصص شخصية ومشجعة. تستمتع ابنتي بأنشطة التكرار، وأصبحت أكثر رغبة في التدريب بين الحصص.', 'ar'],
            ['mohamed-ebrahim', 'Omar H.', 'Adult Quran learner', 'Australia', 5, 'Mohamed keeps the lesson focused while still making space for questions. The weekly targets are clear and have helped me practise more consistently.', 'en'],
            ['mohamed-ebrahim', 'يوسف م.', 'طالب لغة عربية', 'فرنسا', 5, 'شرح واضح وخطوات عملية في كل حصة. أشعر أن الخطة تناسب مستواي وأنني أتقدم بثبات من أسبوع إلى آخر.', 'ar'],
        ];

        foreach ($reviews as [$slug, $name, $relationship, $location, $rating, $review, $locale]) {
            $teacherId = $teachers[$slug] ?? null;

            if (! $teacherId) {
                continue;
            }

            DB::table('review_submissions')->insert([
                'teacher_id' => $teacherId,
                'teacher' => $slug,
                'reviewer_name' => $name,
                'reviewer_relationship' => $relationship,
                'reviewer_location' => $location,
                'rating' => $rating,
                'review' => $review,
                'locale' => $locale,
                'status' => 'approved',
                'admin_notes' => 'Initial website review migrated into the dashboard.',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }

    public function down(): void
    {
        DB::table('review_submissions')
            ->whereIn('teacher', ['mohamed-samy', 'roqaya-badr', 'mohamed-ebrahim'])
            ->where('admin_notes', 'Initial website review migrated into the dashboard.')
            ->delete();
    }
};
