<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('teachers', function (Blueprint $table): void {
            $table->id();
            $table->string('slug', 120)->unique();
            $table->string('image_path', 500)->nullable();
            $table->string('image_url', 500)->nullable();
            $table->string('name_en', 120);
            $table->string('name_ar', 120);
            $table->string('role_en', 180);
            $table->string('role_ar', 180);
            $table->text('short_bio_en');
            $table->text('short_bio_ar');
            $table->longText('about_en')->nullable();
            $table->longText('about_ar')->nullable();
            $table->text('approach_en')->nullable();
            $table->text('approach_ar')->nullable();
            $table->string('experience_en', 220)->nullable();
            $table->string('experience_ar', 220)->nullable();
            $table->json('qualifications_en')->nullable();
            $table->json('qualifications_ar')->nullable();
            $table->json('focus_en')->nullable();
            $table->json('focus_ar')->nullable();
            $table->json('languages_en')->nullable();
            $table->json('languages_ar')->nullable();
            $table->json('learners_en')->nullable();
            $table->json('learners_ar')->nullable();
            $table->json('course_slugs')->nullable();
            $table->unsignedInteger('sort_order')->default(0)->index();
            $table->boolean('is_active')->default(true)->index();
            $table->timestamps();
        });

        Schema::table('review_submissions', function (Blueprint $table): void {
            $table->foreignId('teacher_id')->nullable()->after('id')->constrained()->nullOnDelete();
            $table->string('reviewer_relationship', 160)->nullable()->after('reviewer_name');
            $table->string('reviewer_location', 160)->nullable()->after('reviewer_relationship');
        });

        $now = now();
        $common = [
            'role_en' => 'Online Quran & Arabic Teacher',
            'role_ar' => 'معلم القرآن واللغة العربية أونلاين',
            'approach_en' => 'Personal live instruction, guided practice, useful feedback, and manageable goals chosen after the learner assessment.',
            'approach_ar' => 'تعليم شخصي مباشر، وتدريب موجه، وملاحظات عملية، وأهداف مناسبة تُحدد بعد تقييم مستوى الطالب.',
            'experience_en' => 'Alarabiya Academy teaching team',
            'experience_ar' => 'فريق معلمي أكاديمية العربية',
            'qualifications_en' => json_encode(['Live one-to-one online instruction', 'Personal plan following the free assessment', 'Guided practice with clear progress goals'], JSON_UNESCAPED_UNICODE),
            'qualifications_ar' => json_encode(['تعليم مباشر وفردي أونلاين', 'خطة شخصية بعد حصة التقييم المجانية', 'تدريب موجه بأهداف واضحة للتقدم'], JSON_UNESCAPED_UNICODE),
            'focus_en' => json_encode(['Quran reading', 'Arabic learning', 'Personal practice', 'Level-based lessons'], JSON_UNESCAPED_UNICODE),
            'focus_ar' => json_encode(['قراءة القرآن', 'تعلم العربية', 'التدريب الشخصي', 'حصص حسب المستوى'], JSON_UNESCAPED_UNICODE),
            'languages_en' => json_encode([], JSON_UNESCAPED_UNICODE),
            'languages_ar' => json_encode([], JSON_UNESCAPED_UNICODE),
            'learners_en' => json_encode(['One-to-one learners', 'Students matched by level', 'Flexible online schedules', 'Personal learning goals'], JSON_UNESCAPED_UNICODE),
            'learners_ar' => json_encode(['طلاب الحصص الفردية', 'تسكين حسب المستوى', 'مواعيد مرنة أونلاين', 'أهداف تعلم شخصية'], JSON_UNESCAPED_UNICODE),
            'course_slugs' => json_encode(['quran-reading', 'tajweed-hifz', 'arabic-language', 'islamic-studies'], JSON_UNESCAPED_UNICODE),
            'is_active' => true,
            'created_at' => $now,
            'updated_at' => $now,
        ];

        DB::table('teachers')->insert([
            array_merge($common, [
                'slug' => 'mohamed-samy',
                'image_url' => '/images/teacher-mohamed-samy.webp',
                'name_en' => 'Mohamed Samy',
                'name_ar' => 'محمد سامي',
                'short_bio_en' => "A member of Alarabiya Academy's teaching team, offering personal online lessons shaped around each learner's starting level and goals.",
                'short_bio_ar' => 'عضو في فريق معلمي أكاديمية العربية، يقدم حصصاً فردية أونلاين تُبنى حول مستوى كل طالب وأهدافه.',
                'about_en' => "Mohamed Samy is part of Alarabiya Academy's online teaching team. Every learner begins with a personal assessment so the lesson plan can start at the right level.\n\nLessons are delivered live and one to one, with guided practice, clear next steps, and learning materials selected around the learner's needs.",
                'about_ar' => "محمد سامي عضو في فريق التعليم أونلاين بأكاديمية العربية. يبدأ كل طالب بتقييم شخصي حتى تنطلق الخطة من المستوى المناسب.\n\nتُقدَّم الحصص مباشرة وبصورة فردية، مع تدريب موجه وخطوات تالية واضحة ومواد تعليمية تُختار وفق احتياج الطالب.",
                'sort_order' => 1,
            ]),
            array_merge($common, [
                'slug' => 'roqaya-badr',
                'image_url' => '/images/teacher-ruqaya-badr.webp',
                'name_en' => 'Roqaya Badr',
                'name_ar' => 'رقيه بدر',
                'role_ar' => 'معلمة القرآن واللغة العربية أونلاين',
                'short_bio_en' => "A member of Alarabiya Academy's teaching team, available for personal online learning with a plan matched to the learner's level.",
                'short_bio_ar' => 'عضوة في فريق معلمي أكاديمية العربية، ومتاحة للتعلم الفردي أونلاين بخطة تناسب مستوى الطالبة أو الطالب.',
                'about_en' => "Roqaya Badr is part of Alarabiya Academy's online teaching team. The free assessment helps identify the learner's starting point, goals, and preferred lesson times.\n\nEach lesson is personal and live, with guided practice and a learning path that can be adjusted as the learner develops.",
                'about_ar' => "رقيه بدر عضوة في فريق التعليم أونلاين بأكاديمية العربية. تساعد حصة التقييم المجانية على تحديد نقطة البداية والأهداف والمواعيد المناسبة.\n\nكل حصة فردية ومباشرة، وتضم تدريباً موجهاً ومساراً تعليمياً يمكن تعديله مع تطور مستوى الطالب.",
                'sort_order' => 2,
            ]),
            array_merge($common, [
                'slug' => 'mohamed-ebrahim',
                'image_url' => '/images/teacher-mohamed-ebrahim.webp',
                'name_en' => 'Mohamed Ebrahim',
                'name_ar' => 'محمد إبراهيم',
                'short_bio_en' => "A member of Alarabiya Academy's teaching team, offering personal live lessons with a learning path selected after assessment.",
                'short_bio_ar' => 'عضو في فريق معلمي أكاديمية العربية، يقدم حصصاً مباشرة وشخصية بمسار تعليمي يُختار بعد تقييم المستوى.',
                'about_en' => "Mohamed Ebrahim is part of Alarabiya Academy's online teaching team. The assessment lesson gives the learner an opportunity to meet the tutor and establish a clear starting point.\n\nOngoing lessons are live and one to one, with a structured path, regular practice, and next steps based on learner progress.",
                'about_ar' => "محمد إبراهيم عضو في فريق التعليم أونلاين بأكاديمية العربية. تمنح حصة التقييم الطالب فرصة للتعرف إلى المعلم وتحديد نقطة بداية واضحة.\n\nتستمر الحصص بصورة مباشرة وفردية، مع مسار منظم وتدريب منتظم وخطوات تالية تعتمد على تقدم الطالب.",
                'sort_order' => 3,
            ]),
        ]);
    }

    public function down(): void
    {
        Schema::table('review_submissions', function (Blueprint $table): void {
            $table->dropConstrainedForeignId('teacher_id');
            $table->dropColumn(['reviewer_relationship', 'reviewer_location']);
        });

        Schema::dropIfExists('teachers');
    }
};
