<?php
declare(strict_types=1);

header('Content-Type: text/html; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');
header('Referrer-Policy: strict-origin-when-cross-origin');

function review_clean_line(string $value): string {
    return trim(str_replace(["\r", "\n"], ' ', $value));
}

function review_page(string $title, string $message, bool $success, bool $arabic): never {
    $color = $success ? '#0878c9' : '#9b3f36';
    $safeTitle = htmlspecialchars($title, ENT_QUOTES, 'UTF-8');
    $safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
    $home = $arabic ? '/ar/' : '/';
    $back = $arabic ? 'العودة إلى أكاديمية العربية' : 'Return to Alarabiya Academy';
    $dir = $arabic ? 'rtl' : 'ltr';
    $lang = $arabic ? 'ar' : 'en';
    $font = $arabic ? '"Almarai",Tahoma,Arial,sans-serif' : '"Manrope","Segoe UI",Arial,sans-serif';

    echo '<!doctype html><html lang="' . $lang . '" dir="' . $dir . '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' . $safeTitle . ' | Alarabiya Academy</title>';
    echo '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&amp;family=Manrope:wght@400;500;600;700&amp;display=swap" rel="stylesheet">';
    echo '<style>body{margin:0;min-height:100vh;display:grid;place-items:center;padding:24px;box-sizing:border-box;background:#e8f6ff;color:#102b44;font:18px/1.8 ' . $font . '}.card{width:min(580px,100%);padding:52px;box-sizing:border-box;background:#fff;box-shadow:0 24px 70px rgba(5,55,97,.14);text-align:center;border-radius:24px}.mark{width:62px;height:62px;margin:auto;display:grid;place-items:center;border-radius:20px;background:' . $color . ';color:white;font:30px ' . $font . '}h1{margin:24px 0 14px;font:700 38px/1.2 ' . $font . '}p{margin:0;color:#60768a;line-height:1.8}a{margin-top:28px;display:inline-flex;min-height:52px;padding:0 24px;align-items:center;background:#0878c9;color:white;text-decoration:none;font-size:15px;font-weight:700;border-radius:13px}</style></head><body>';
    echo '<main class="card"><div class="mark">' . ($success ? '✓' : '!') . '</div><h1>' . $safeTitle . '</h1><p>' . $safeMessage . '</p><a href="' . $home . '">' . $back . '</a></main></body></html>';
    exit;
}

$locale = review_clean_line((string)($_POST['locale'] ?? 'en'));
$arabic = $locale === 'ar';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    review_page(
        $arabic ? 'الطلب غير مسموح' : 'Request not allowed',
        $arabic ? 'يرجى استخدام نموذج التقييم في صفحة المعلم.' : 'Please use the review form on a teacher profile.',
        false,
        $arabic
    );
}

if (!empty($_POST['website'] ?? '')) {
    review_page(
        $arabic ? 'شكراً لك' : 'Thank you',
        $arabic ? 'تم استلام تقييمك للمراجعة.' : 'Your review has been received for moderation.',
        true,
        $arabic
    );
}

$teacher = review_clean_line((string)($_POST['teacher'] ?? ''));
$name = review_clean_line((string)($_POST['name'] ?? ''));
$rating = filter_var((string)($_POST['rating'] ?? ''), FILTER_VALIDATE_INT);
$review = trim((string)($_POST['review'] ?? ''));

if (
    $teacher === '' ||
    $name === '' ||
    $rating === false ||
    $rating < 1 ||
    $rating > 5 ||
    mb_strlen($review) < 30
) {
    http_response_code(422);
    review_page(
        $arabic ? 'تحقق من البيانات' : 'Please check your details',
        $arabic ? 'يرجى كتابة اسمك واختيار التقييم بالنجوم وإضافة تقييمك.' : 'Please enter your name, choose a star rating, and write your review.',
        false,
        $arabic
    );
}

if (mb_strlen($name) > 100 || mb_strlen($teacher) > 120 || mb_strlen($review) > 1500) {
    http_response_code(422);
    review_page(
        $arabic ? 'التقييم طويل جداً' : 'Review too long',
        $arabic ? 'يرجى اختصار التقييم والمحاولة مرة أخرى.' : 'Please shorten your review and try again.',
        false,
        $arabic
    );
}

$recipient = getenv('ALARABIYA_REVIEW_EMAIL') ?: (getenv('ALARABIYA_ENROLLMENT_EMAIL') ?: 'hello@alarabiyaacademy.com');
$subject = 'Teacher review awaiting moderation: ' . $teacher;
$body = "New Alarabiya Academy teacher review\n\n"
    . "Teacher: {$teacher}\n"
    . "Reviewer: {$name}\n"
    . "Rating: {$rating}/5\n"
    . "Language: {$locale}\n\n"
    . "Review:\n{$review}\n\n"
    . "Moderation status: NOT PUBLISHED\n";
$host = preg_replace('/[^a-zA-Z0-9.-]/', '', (string)($_SERVER['HTTP_HOST'] ?? 'alarabiyaacademy.com'));
$headers = [
    'From: Alarabiya Academy Website <no-reply@' . $host . '>',
    'Content-Type: text/plain; charset=UTF-8',
];

if (!mail($recipient, $subject, $body, implode("\r\n", $headers))) {
    http_response_code(500);
    review_page(
        $arabic ? 'تعذر إرسال التقييم' : 'We could not send your review',
        $arabic ? 'يرجى إرسال تقييمك مباشرة إلى hello@alarabiyaacademy.com.' : 'Please email your review directly to hello@alarabiyaacademy.com.',
        false,
        $arabic
    );
}

review_page(
    $arabic ? 'تم إرسال تقييمك' : 'Your review was submitted',
    $arabic ? 'شكراً لك. سيقوم فريق الأكاديمية بمراجعة التقييم قبل نشره.' : 'Thank you. The academy team will moderate your review before it is published.',
    true,
    $arabic
);
