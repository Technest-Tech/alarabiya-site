<?php

namespace App\Http\Controllers;

use App\Mail\NewEnrollmentSubmission;
use App\Mail\NewReviewSubmission;
use App\Models\EnrollmentSubmission;
use App\Models\ReviewSubmission;
use App\Models\SiteSetting;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Throwable;

class SubmissionController extends Controller
{
    public function enrollment(Request $request): Response
    {
        $arabic = $request->string('locale')->toString() === 'ar';

        if ($request->filled('website')) {
            return $this->result(
                $arabic ? 'شكراً لك' : 'Thank you',
                $arabic ? 'تم استلام طلبك.' : 'Your request has been received.',
                true,
                $arabic,
            );
        }

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email:rfc', 'max:160'],
            'phone' => ['required', 'string', 'max:40'],
            'age' => ['required', 'string', 'max:60'],
            'program' => ['required', 'string', 'max:120'],
            'message' => ['nullable', 'string', 'max:2000'],
            'locale' => ['nullable', 'in:en,ar'],
            'consent' => ['accepted'],
        ]);

        if ($validator->fails()) {
            return $this->result(
                $arabic ? 'تحقق من البيانات' : 'Please check your details',
                $arabic
                    ? 'بعض البيانات المطلوبة ناقصة أو غير صحيحة. ارجع إلى النموذج وحاول مرة أخرى.'
                    : 'Some required information is missing or invalid. Go back to the form and try again.',
                false,
                $arabic,
                422,
            );
        }

        $data = $validator->validated();
        $submission = EnrollmentSubmission::query()->create([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'age_group' => $data['age'],
            'program' => $data['program'],
            'message' => $data['message'] ?? null,
            'locale' => $data['locale'] ?? 'en',
            'status' => 'new',
            'source_url' => $request->headers->get('referer'),
            'ip_address' => $request->ip(),
            'user_agent' => str($request->userAgent())->limit(1000)->toString(),
            'consented_at' => now(),
        ]);

        $this->sendEnrollmentNotification($submission);

        return $this->result(
            $arabic ? 'تم إرسال طلبك' : 'Your first step is complete',
            $arabic
                ? 'شكراً لك. سيتواصل معك فريق الأكاديمية خلال يوم عمل واحد لترتيب حصة التقييم المجانية.'
                : 'Thank you. Our academic team will contact you within one working day to arrange your complimentary assessment lesson.',
            true,
            $arabic,
        );
    }

    public function review(Request $request): Response
    {
        $arabic = $request->string('locale')->toString() === 'ar';

        if ($request->filled('website')) {
            return $this->result(
                $arabic ? 'شكراً لك' : 'Thank you',
                $arabic ? 'تم استلام تقييمك للمراجعة.' : 'Your review has been received for moderation.',
                true,
                $arabic,
            );
        }

        $validator = Validator::make($request->all(), [
            'teacher' => ['required', 'string', 'max:160'],
            'name' => ['required', 'string', 'max:100'],
            'rating' => ['required', 'integer', 'between:1,5'],
            'review' => ['required', 'string', 'min:30', 'max:1500'],
            'locale' => ['nullable', 'in:en,ar'],
        ]);

        if ($validator->fails()) {
            return $this->result(
                $arabic ? 'تحقق من البيانات' : 'Please check your details',
                $arabic
                    ? 'يرجى كتابة اسمك واختيار التقييم بالنجوم وإضافة تقييم لا يقل عن ٣٠ حرفاً.'
                    : 'Please enter your name, choose a star rating, and write a review of at least 30 characters.',
                false,
                $arabic,
                422,
            );
        }

        $data = $validator->validated();
        $submission = ReviewSubmission::query()->create([
            'teacher' => $data['teacher'],
            'reviewer_name' => $data['name'],
            'rating' => $data['rating'],
            'review' => $data['review'],
            'locale' => $data['locale'] ?? 'en',
            'status' => 'pending',
            'source_url' => $request->headers->get('referer'),
            'ip_address' => $request->ip(),
            'user_agent' => str($request->userAgent())->limit(1000)->toString(),
        ]);

        $this->sendReviewNotification($submission);

        return $this->result(
            $arabic ? 'تم إرسال تقييمك' : 'Your review was submitted',
            $arabic
                ? 'شكراً لك. سيقوم فريق الأكاديمية بمراجعة التقييم قبل نشره.'
                : 'Thank you. The academy team will moderate your review before it is published.',
            true,
            $arabic,
        );
    }

    private function sendEnrollmentNotification(EnrollmentSubmission $submission): void
    {
        $recipient = SiteSetting::current()->notification_email;

        if (blank($recipient)) {
            return;
        }

        try {
            Mail::to($recipient)->send(new NewEnrollmentSubmission($submission));
            $submission->update(['emailed_at' => now()]);
        } catch (Throwable $exception) {
            report($exception);
        }
    }

    private function sendReviewNotification(ReviewSubmission $submission): void
    {
        $recipient = SiteSetting::current()->notification_email;

        if (blank($recipient)) {
            return;
        }

        try {
            Mail::to($recipient)->send(new NewReviewSubmission($submission));
            $submission->update(['emailed_at' => now()]);
        } catch (Throwable $exception) {
            report($exception);
        }
    }

    private function result(
        string $title,
        string $message,
        bool $success,
        bool $arabic,
        int $status = 200,
    ): Response {
        return response()->view('submissions.result', compact(
            'title',
            'message',
            'success',
            'arabic',
        ), $status);
    }
}
