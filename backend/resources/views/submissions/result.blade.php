<!doctype html>
<html lang="{{ $arabic ? 'ar' : 'en' }}" dir="{{ $arabic ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex">
    <title>{{ $title }} | Alarabiya Academy</title>
    <style>
        :root { color-scheme: light; font-family: {{ $arabic ? "Tahoma, Arial, sans-serif" : "Manrope, 'Segoe UI', Arial, sans-serif" }}; }
        * { box-sizing: border-box; }
        body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 24px; background: #e8f6ff; color: #102b44; }
        main { width: min(580px, 100%); padding: 52px; border-radius: 24px; background: #fff; box-shadow: 0 24px 70px rgba(5, 55, 97, .14); text-align: center; }
        .mark { width: 62px; height: 62px; margin: auto; display: grid; place-items: center; border-radius: 20px; background: {{ $success ? '#0878c9' : '#9b3f36' }}; color: #fff; font-size: 30px; }
        h1 { margin: 24px 0 14px; font-size: clamp(30px, 7vw, 38px); line-height: 1.2; }
        p { margin: 0; color: #60768a; font-size: 18px; line-height: 1.8; }
        a { margin-top: 28px; display: inline-flex; min-height: 52px; padding: 0 24px; align-items: center; border-radius: 13px; background: #0878c9; color: #fff; text-decoration: none; font-size: 15px; font-weight: 700; }
        @media (max-width: 520px) { main { padding: 36px 24px; } }
    </style>
</head>
<body>
    <main>
        <div class="mark">{{ $success ? '✓' : '!' }}</div>
        <h1>{{ $title }}</h1>
        <p>{{ $message }}</p>
        <a href="{{ $arabic ? '/ar/' : '/' }}">{{ $arabic ? 'العودة إلى أكاديمية العربية' : 'Return to Alarabiya Academy' }}</a>
    </main>
</body>
</html>
