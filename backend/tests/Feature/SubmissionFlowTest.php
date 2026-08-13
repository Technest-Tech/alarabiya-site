<?php

namespace Tests\Feature;

use App\Mail\NewEnrollmentSubmission;
use App\Mail\NewReviewSubmission;
use App\Models\EnrollmentSubmission;
use App\Models\SiteSetting;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class SubmissionFlowTest extends TestCase
{
    use RefreshDatabase;

    public function test_enrollment_is_stored_and_notification_is_sent(): void
    {
        Mail::fake();
        SiteSetting::query()->create([
            ...SiteSetting::defaults(),
            'notification_email' => 'admissions@example.com',
        ]);

        $response = $this->post('/api/enroll', [
            'name' => 'Amina Hassan',
            'phone' => '+20 100 123 4567',
            'age' => '9–12 years',
            'locale' => 'en',
            'website' => '',
        ]);

        $response->assertOk()->assertSee('Your first step is complete');
        $this->assertDatabaseHas('enrollment_submissions', [
            'name' => 'Amina Hassan',
            'phone' => '+20 100 123 4567',
            'age_group' => '9–12 years',
            'status' => 'new',
        ]);
        $this->assertNotNull(EnrollmentSubmission::query()->firstOrFail()->emailed_at);
        Mail::assertSent(NewEnrollmentSubmission::class, fn (NewEnrollmentSubmission $mail): bool => $mail->hasTo('admissions@example.com') && $mail->submission->phone === '+20 100 123 4567'
        );
    }

    public function test_honeypot_submission_is_acknowledged_but_not_stored(): void
    {
        Mail::fake();

        $this->post('/api/enroll', [
            'website' => 'https://spam.example',
        ])->assertOk();

        $this->assertDatabaseCount('enrollment_submissions', 0);
        Mail::assertNothingSent();
    }

    public function test_invalid_enrollment_is_rejected(): void
    {
        $this->post('/api/enroll', [
            'name' => 'Incomplete',
            'locale' => 'en',
        ])->assertStatus(422)->assertSee('Please check your details');

        $this->assertDatabaseCount('enrollment_submissions', 0);
    }

    public function test_review_is_stored_for_moderation(): void
    {
        Mail::fake();
        SiteSetting::query()->create(SiteSetting::defaults());

        $response = $this->post('/api/reviews', [
            'teacher_slug' => 'mohamed-samy',
            'name' => 'Yusuf Ali',
            'rating' => 5,
            'review' => 'The lessons were clear, patient, and very helpful for my recitation.',
            'locale' => 'en',
            'website' => '',
        ]);

        $response->assertOk()->assertSee('Your review was submitted');
        $this->assertDatabaseHas('review_submissions', [
            'reviewer_name' => 'Yusuf Ali',
            'rating' => 5,
            'status' => 'pending',
        ]);
        Mail::assertSent(NewReviewSubmission::class);
    }

    public function test_public_settings_only_expose_public_contact_values(): void
    {
        SiteSetting::query()->create([
            ...SiteSetting::defaults(),
            'contact_email' => 'contact@example.com',
            'notification_email' => 'private-inbox@example.com',
            'whatsapp_number' => '+20 100 123 4567',
            'instagram_url' => 'https://instagram.com/example',
        ]);

        $response = $this->getJson('/api/site-settings');

        $response
            ->assertOk()
            ->assertJsonPath('contactEmail', 'contact@example.com')
            ->assertJsonPath('whatsappUrl', 'https://wa.me/201001234567?text=Assalamu%20alaikum%2C%20I%20would%20like%20to%20learn%20more%20about%20Alarabiya%20Academy.')
            ->assertJsonMissing(['notification_email' => 'private-inbox@example.com']);
        $this->assertStringContainsString('max-age=30', (string) $response->headers->get('Cache-Control'));
        $this->assertStringContainsString('s-maxage=60', (string) $response->headers->get('Cache-Control'));
        $this->assertStringNotContainsString('private-inbox', $response->getContent());
    }

    public function test_public_teacher_api_exposes_only_active_managed_profiles_and_approved_reviews(): void
    {
        $hiddenTeacher = Teacher::query()->create([
            'slug' => 'hidden-teacher',
            'name_en' => 'Hidden Teacher',
            'name_ar' => 'معلم مخفي',
            'role_en' => 'Teacher',
            'role_ar' => 'معلم',
            'short_bio_en' => 'Hidden profile.',
            'short_bio_ar' => 'ملف مخفي.',
            'is_active' => false,
        ]);

        $response = $this->getJson('/api/teachers');

        $response->assertOk()->assertJsonFragment(['slug' => 'mohamed-samy']);
        $response->assertJsonMissing(['slug' => $hiddenTeacher->slug]);
        $this->assertSame('approved', Teacher::query()->where('slug', 'mohamed-samy')->firstOrFail()->approvedReviews()->firstOrFail()->status);
        $this->get('/teachers/mohamed-samy')->assertOk()->assertSee('Mohamed Samy')->assertSee('Learner &amp; family feedback', false);
        $this->get('/ar/teachers/mohamed-samy')->assertOk()->assertSee('محمد سامي')->assertSee('آراء الطلاب والأسر');
    }

    public function test_admin_requires_authentication(): void
    {
        $this->get('/admin')->assertRedirect('/admin/login');
    }

    public function test_admin_can_open_dashboard_resources_and_settings(): void
    {
        $user = User::factory()->create();
        $settings = SiteSetting::query()->create(SiteSetting::defaults());

        $this->actingAs($user)->get('/admin')->assertOk();
        $this->actingAs($user)->get('/admin/enrollment-submissions')->assertOk();
        $this->actingAs($user)->get('/admin/review-submissions')->assertOk();
        $this->actingAs($user)->get('/admin/teachers')->assertOk();
        $this->actingAs($user)->get('/admin/teachers/create')->assertOk();
        $this->actingAs($user)->get('/admin/teachers/'.Teacher::query()->firstOrFail()->slug.'/edit')->assertOk();
        $this->actingAs($user)->get('/admin/review-submissions/create')->assertOk();
        $this->actingAs($user)->get("/admin/site-settings/{$settings->getKey()}/edit")->assertOk();
    }
}
