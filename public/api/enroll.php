<?php
declare(strict_types=1);

header('Content-Type: text/html; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');
header('Referrer-Policy: strict-origin-when-cross-origin');

function clean_line(string $value): string {
    return trim(str_replace(["\r", "\n"], ' ', $value));
}

function page(string $title, string $message, bool $success): never {
    $color = $success ? '#0d3b32' : '#9b3f36';
    $safeTitle = htmlspecialchars($title, ENT_QUOTES, 'UTF-8');
    $safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
    echo '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' . $safeTitle . ' | Alarabiya Academy</title>';
    echo '<style>body{margin:0;min-height:100vh;display:grid;place-items:center;padding:24px;box-sizing:border-box;background:#f4f0e8;color:#142720;font:18px/1.7 Arial,sans-serif}.card{width:min(560px,100%);padding:52px;box-sizing:border-box;background:#fffdf8;box-shadow:0 24px 70px rgba(20,39,32,.12);text-align:center}.mark{width:58px;height:58px;margin:auto;display:grid;place-items:center;border-radius:50%;background:' . $color . ';color:white;font:30px Georgia}h1{margin:24px 0 14px;font:42px/1.1 Georgia,serif}p{margin:0;color:#66736d;line-height:1.7}a{margin-top:28px;display:inline-flex;min-height:50px;padding:0 22px;align-items:center;background:#0d3b32;color:white;text-decoration:none;font-size:15px;font-weight:bold}</style></head><body>';
    echo '<main class="card"><div class="mark">' . ($success ? '✓' : '!') . '</div><h1>' . $safeTitle . '</h1><p>' . $safeMessage . '</p><a href="/">Return to Alarabiya Academy</a></main></body></html>';
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    page('Request not allowed', 'Please use the enrollment form to contact the academy.', false);
}

if (!empty($_POST['website'] ?? '')) {
    page('Thank you', 'Your request has been received.', true);
}

$name = clean_line((string)($_POST['name'] ?? ''));
$email = filter_var(clean_line((string)($_POST['email'] ?? '')), FILTER_VALIDATE_EMAIL);
$phone = clean_line((string)($_POST['phone'] ?? ''));
$age = clean_line((string)($_POST['age'] ?? ''));
$program = clean_line((string)($_POST['program'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));
$consent = (string)($_POST['consent'] ?? '');

if ($name === '' || $email === false || $phone === '' || $age === '' || $program === '' || $consent !== 'yes') {
    http_response_code(422);
    page('Please check your details', 'Some required information is missing or invalid. Go back and complete every required field.', false);
}

if (mb_strlen($name) > 100 || mb_strlen($phone) > 40 || mb_strlen($message) > 2000) {
    http_response_code(422);
    page('Message too long', 'Please shorten your details and try again.', false);
}

$recipient = getenv('ALARABIYA_ENROLLMENT_EMAIL') ?: 'hello@alarabiyaacademy.com';
$subject = 'New free lesson request: ' . $program;
$body = "New Alarabiya Academy enrollment request\n\n"
    . "Name: {$name}\n"
    . "Email: {$email}\n"
    . "WhatsApp: {$phone}\n"
    . "Age group: {$age}\n"
    . "Program: {$program}\n\n"
    . "Message:\n{$message}\n";
$headers = [
    'From: Alarabiya Academy Website <no-reply@' . ($_SERVER['HTTP_HOST'] ?? 'alarabiyaacademy.com') . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Content-Type: text/plain; charset=UTF-8',
];

if (!mail($recipient, $subject, $body, implode("\r\n", $headers))) {
    http_response_code(500);
    page('We could not send your request', 'Please email the academy directly at hello@alarabiyaacademy.com and we will arrange your free lesson.', false);
}

page('Your first step is complete', 'Thank you. Our academic team will contact you within one working day to arrange your complimentary assessment lesson.', true);
