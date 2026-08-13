@php
    $locale = $arabic ? 'ar' : 'en';
    $home = $arabic ? '/ar/' : '/';
    $alternate = $arabic ? '/teachers/'.$profile['slug'].'/' : '/ar/teachers/'.$profile['slug'].'/';
    $reviews = $profile['reviews'];
    $average = count($reviews) ? array_sum(array_column($reviews, 'rating')) / count($reviews) : 0;
    $courseNames = [
        'quran-reading' => ['en' => 'Quran Reading', 'ar' => 'قراءة القرآن'],
        'tajweed-hifz' => ['en' => 'Tajweed & Hifz', 'ar' => 'التجويد والحفظ'],
        'arabic-language' => ['en' => 'Arabic Language', 'ar' => 'اللغة العربية'],
        'islamic-studies' => ['en' => 'Islamic Studies', 'ar' => 'الدراسات الإسلامية'],
    ];
@endphp
<!doctype html>
<html lang="{{ $locale }}" dir="{{ $arabic ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $profile['name'][$locale] }} — {{ $profile['role'][$locale] }} | {{ $arabic ? 'أكاديمية العربية' : 'Alarabiya Academy' }}</title>
    <meta name="description" content="{{ $profile['shortBio'][$locale] }}">
    <link rel="canonical" href="{{ url($arabic ? '/ar/teachers/'.$profile['slug'].'/' : '/teachers/'.$profile['slug'].'/') }}">
    <link rel="alternate" hreflang="{{ $arabic ? 'en' : 'ar' }}" href="{{ url($alternate) }}">
    <link rel="icon" href="/favicon.ico">
    @if ($stylesheet)<link rel="stylesheet" href="{{ $stylesheet }}">@endif
</head>
<body>
<main class="{{ $arabic ? 'rtl-site' : '' }}">
    <div class="topbar">
        <p>✦ {{ $arabic ? 'التسجيل متاح الآن للأطفال والكبار' : 'Enrollment is open for kids and adults' }}</p>
        <a href="{{ $home }}#enroll">{{ $arabic ? 'اطلب تقييمك المجاني ←' : 'Request your free assessment →' }}</a>
    </div>
    <header class="site-header detail-site-header">
        <a class="brand" href="{{ $home }}" aria-label="{{ $arabic ? 'الرئيسية' : 'Home' }}">
            <img class="brand-logo" src="/logo-mark.webp" alt="" width="64" height="64">
            <span class="brand-copy"><strong>ALARABIYA</strong><small>{{ $arabic ? 'أكاديمية القرآن واللغة العربية' : 'Quran & Arabic Academy' }}</small></span>
        </a>
        <nav class="desktop-nav">
            <a href="{{ $home }}#programs">{{ $arabic ? 'البرامج' : 'Programs' }}</a>
            <a href="{{ $home }}#teacher-profiles">{{ $arabic ? 'المعلمون' : 'Teachers' }}</a>
            <a href="{{ $home }}#how-it-works">{{ $arabic ? 'كيف نبدأ؟' : 'How it works' }}</a>
            <a href="{{ $home }}#faq">{{ $arabic ? 'الأسئلة' : 'FAQ' }}</a>
        </nav>
        <div class="header-actions">
            <div class="language-switch">
                <a class="{{ $arabic ? '' : 'active' }}" href="{{ $arabic ? $alternate : '#' }}">EN</a>
                <a class="{{ $arabic ? 'active' : '' }}" href="{{ $arabic ? '#' : $alternate }}">العربية</a>
            </div>
            <a class="header-cta" href="{{ $home }}#enroll">{{ $arabic ? 'حصة تجريبية مجانية' : 'Free trial lesson' }}</a>
        </div>
        <details class="mobile-menu">
            <summary aria-label="{{ $arabic ? 'فتح القائمة' : 'Open navigation' }}"><span></span><span></span><span></span></summary>
            <nav>
                <a href="{{ $home }}#programs">{{ $arabic ? 'البرامج' : 'Programs' }}</a>
                <a href="{{ $home }}#teacher-profiles">{{ $arabic ? 'المعلمون' : 'Teachers' }}</a>
                <a href="{{ $home }}#how-it-works">{{ $arabic ? 'كيف نبدأ؟' : 'How it works' }}</a>
                <div class="mobile-language-switch"><a href="{{ $arabic ? $alternate : '#' }}">English</a><a href="{{ $arabic ? '#' : $alternate }}">العربية</a></div>
                <a class="button button-gold" href="{{ $home }}#enroll">{{ $arabic ? 'اطلب تقييماً مجانياً' : 'Request a free assessment' }}</a>
            </nav>
        </details>
    </header>

    <div class="marketplace-profile-page">
        <div class="profile-demo-banner"><span>✓ {{ $arabic ? 'عضو في فريق أكاديمية العربية · يتم تأكيد اختيار المعلم بعد حصة التقييم المجانية.' : 'Alarabiya Academy teaching team · Your tutor match is confirmed after the free assessment.' }}</span></div>
        <div class="marketplace-profile-grid">
            <div class="marketplace-profile-content">
                <nav class="marketplace-breadcrumb"><a href="{{ $home }}">{{ $arabic ? 'الرئيسية' : 'Home' }}</a><span>/</span><a href="{{ $home }}#teacher-profiles">{{ $arabic ? 'المعلمون' : 'Teachers' }}</a><span>/</span><strong>{{ $profile['name'][$locale] }}</strong></nav>
                <section class="marketplace-profile-card">
                    <div class="marketplace-profile-photo">
                        <img src="{{ $profile['image'] }}" alt="{{ $profile['name'][$locale] }} — {{ $profile['role'][$locale] }}" width="960" height="1200">
                        <span><i></i>{{ $arabic ? 'فريق الأكاديمية' : 'Academy teacher' }}</span>
                    </div>
                    <div class="marketplace-profile-summary">
                        <div class="marketplace-profile-label">✦ {{ $arabic ? 'حصص فردية مباشرة أونلاين' : 'Online one-to-one tutor' }}</div>
                        <h1>{{ $profile['name'][$locale] }}</h1>
                        <p class="marketplace-profile-role">{{ $profile['role'][$locale] }}</p>
                        @if (count($reviews))
                            <div class="marketplace-rating-row"><strong>{{ number_format($average, 1) }}</strong><span class="marketplace-stars">★★★★★</span><a href="#reviews">{{ count($reviews) }} {{ $arabic ? 'تقييمات منشورة' : 'published reviews' }}</a></div>
                        @endif
                        <p class="marketplace-profile-bio">{{ $profile['shortBio'][$locale] }}</p>
                        <div class="marketplace-subject-tags">@foreach ($profile['focus'][$locale] as $item)<span>{{ $item }}</span>@endforeach</div>
                        <div class="marketplace-profile-facts"><span>◉ {{ $arabic ? 'حصص مباشرة أونلاين' : 'Live online lessons' }}</span><span>◷ {{ $profile['experience'][$locale] }}</span>@if(count($profile['languages'][$locale]))<span>文 {{ implode(' · ', $profile['languages'][$locale]) }}</span>@endif</div>
                        <a class="button button-gold marketplace-mobile-booking" href="{{ $home }}#enroll">{{ $arabic ? 'احجز حصة التقييم المجانية ←' : 'Book the free assessment →' }}</a>
                    </div>
                </section>

                <section class="marketplace-section">
                    <div class="marketplace-section-heading"><span>✦</span><div><small>{{ $arabic ? 'نبذة تعريفية' : 'About the tutor' }}</small><h2>{{ $arabic ? 'عن '.$profile['name']['ar'] : 'About '.$profile['name']['en'] }}</h2></div></div>
                    <div class="marketplace-rich-copy">@foreach ($profile['about'][$locale] as $paragraph)<p>{{ $paragraph }}</p>@endforeach</div>
                </section>

                <section class="marketplace-section">
                    <div class="marketplace-section-heading"><span>✓</span><div><small>{{ $arabic ? 'طريقة الحصة' : 'Lesson approach' }}</small><h2>{{ $arabic ? 'كيف تسير الدروس؟' : 'About the lessons' }}</h2></div></div>
                    <div class="marketplace-approach"><p>{{ $profile['approach'][$locale] }}</p></div>
                    <div class="marketplace-detail-columns">
                        <div><h3>{{ $arabic ? 'يمكنك العمل على' : 'What you can work on' }}</h3><div class="marketplace-check-list">@foreach($profile['focus'][$locale] as $item)<span>✓ {{ $item }}</span>@endforeach</div></div>
                        <div><h3>{{ $arabic ? 'مناسب لـ' : 'A good match for' }}</h3><div class="marketplace-check-list">@foreach($profile['learners'][$locale] as $item)<span>✓ {{ $item }}</span>@endforeach</div></div>
                    </div>
                </section>

                <section class="marketplace-section">
                    <div class="marketplace-section-heading"><span>★</span><div><small>{{ $arabic ? 'معايير الحصة' : 'Lesson standards' }}</small><h2>{{ $arabic ? 'تعلم شخصي أونلاين' : 'Personal online learning' }}</h2></div></div>
                    <div class="marketplace-credentials"><div class="marketplace-experience-card"><div><small>{{ $arabic ? 'فريق الأكاديمية' : 'Academy team' }}</small><strong>{{ $profile['experience'][$locale] }}</strong></div></div><ul>@foreach($profile['qualifications'][$locale] as $item)<li>✓ {{ $item }}</li>@endforeach</ul></div>
                </section>

                @if(count($profile['courseSlugs']))
                    <section class="marketplace-section">
                        <div class="marketplace-section-heading"><span>◫</span><div><small>{{ $arabic ? 'مسارات الأكاديمية' : 'Academy learning paths' }}</small><h2>{{ $arabic ? 'استكشف البرامج المتاحة' : 'Explore available programs' }}</h2></div></div>
                        <div class="marketplace-subject-tags marketplace-managed-courses">@foreach($profile['courseSlugs'] as $slug)@if(isset($courseNames[$slug]))<a href="{{ $arabic ? '/ar/courses/'.$slug.'/' : '/courses/'.$slug.'/' }}">{{ $courseNames[$slug][$locale] }} {{ $arabic ? '←' : '→' }}</a>@endif @endforeach</div>
                    </section>
                @endif

                @if(count($reviews))
                    <section class="marketplace-section marketplace-feedback-showcase" id="reviews">
                        <div class="marketplace-section-heading marketplace-review-heading"><span>★</span><div><small>{{ $arabic ? 'آراء الطلاب والأسر' : 'Learner & family feedback' }}</small><h2>{{ number_format($average, 1) }} · {{ count($reviews) }} {{ $arabic ? 'تقييمات منشورة' : 'published reviews' }}</h2></div></div>
                        <div class="marketplace-review-list">
                            @foreach($reviews as $review)
                                <article style="--review-index: {{ $loop->index }}">
                                    <header><span class="marketplace-review-avatar">{{ mb_substr($review['reviewer'][$locale], 0, 1) }}</span><div><strong>{{ $review['reviewer'][$locale] }}</strong><small>{{ $review['relationship'][$locale] }} · {{ $review['location'][$locale] }}</small></div><span class="marketplace-review-stars">{{ str_repeat('★', $review['rating']) }}</span></header>
                                    <blockquote>“{{ $review['text'][$locale] }}”</blockquote>
                                    <div class="marketplace-review-footnote">✓ {{ $arabic ? 'تجربة طالب أو أسرة' : 'Learner or family experience' }}</div>
                                </article>
                            @endforeach
                        </div>
                    </section>
                @endif

                <section class="marketplace-section marketplace-review-form-section">
                    <div class="marketplace-section-heading"><span>★</span><div><small>{{ $arabic ? 'شارك تجربتك' : 'Share your experience' }}</small><h2>{{ $arabic ? 'أرسل تقييمك' : 'Submit a review' }}</h2></div></div>
                    <form class="review-form marketplace-review-form" action="/api/reviews" method="post">
                        <input type="hidden" name="teacher_slug" value="{{ $profile['slug'] }}"><input type="hidden" name="locale" value="{{ $locale }}">
                        <div class="honeypot" aria-hidden="true"><label>Website<input name="website" type="text" tabindex="-1" autocomplete="off"></label></div>
                        <label>{{ $arabic ? 'الاسم' : 'Your name' }}<input name="name" type="text" placeholder="{{ $arabic ? 'الاسم الكامل' : 'Full name' }}" maxlength="100" required></label>
                        <label>{{ $arabic ? 'التقييم' : 'Your rating' }}<select name="rating" required><option value="">{{ $arabic ? 'اختر التقييم' : 'Choose rating' }}</option><option value="5">★★★★★</option><option value="4">★★★★</option><option value="3">★★★</option><option value="2">★★</option><option value="1">★</option></select></label>
                        <label>{{ $arabic ? 'تقييمك' : 'Your review' }}<textarea name="review" rows="5" minlength="30" maxlength="1500" required></textarea></label>
                        <button class="button button-blue form-submit" type="submit">{{ $arabic ? 'إرسال التقييم ←' : 'Submit review →' }}</button>
                    </form>
                </section>
            </div>

            <aside class="marketplace-booking-card">
                @if(count($reviews))<div class="marketplace-booking-rating"><span>★</span><div><strong>{{ number_format($average, 1) }}</strong><small>{{ count($reviews) }} {{ $arabic ? 'تقييمات منشورة' : 'published reviews' }}</small></div></div>@endif
                <p class="marketplace-booking-kicker">{{ $arabic ? 'الحصة الأولى' : 'Your first lesson' }}</p><h2>{{ $arabic ? 'تقييم شخصي مجاني' : 'Free personal assessment' }}</h2>
                <p>{{ $arabic ? 'قابل المعلم، وحدد مستواك، واحصل على مسار تعلم يناسب أهدافك.' : 'Meet the tutor, check your level, and receive a learning path matched to your goals.' }}</p>
                <div class="marketplace-booking-features"><span>◉ {{ $arabic ? 'حصة مباشرة أونلاين' : 'Live online lesson' }}</span><span>✓ {{ $arabic ? 'تعليم فردي' : 'One-to-one format' }}</span><span>◎ {{ $arabic ? 'متاح حول العالم' : 'Available worldwide' }}</span><span>◷ {{ $arabic ? 'رد خلال يوم عمل' : 'Reply within one working day' }}</span></div>
                <a class="button button-gold button-large marketplace-booking-button" href="{{ $home }}#enroll">{{ $arabic ? 'احجز حصتي المجانية ←' : 'Book my free lesson →' }}</a>
                <div class="marketplace-booking-trust">✓ {{ $arabic ? 'لا يلزم دفع أو التزام' : 'No payment or commitment required' }}</div>
            </aside>
        </div>
    </div>

    <section class="detail-final-cta marketplace-final-cta"><div><p>✦ {{ $arabic ? 'ابدأ بخطوة بسيطة' : 'Start with one simple step' }}</p><h2>{{ $arabic ? 'قابل معلمك في حصة تقييم مجانية.' : 'Meet your tutor in a free assessment lesson.' }}</h2></div><a class="button button-gold button-large" href="{{ $home }}#enroll">{{ $arabic ? 'احجز الآن ←' : 'Book now →' }}</a></section>

    <footer><div class="footer-main"><div class="footer-brand"><a class="brand brand-light" href="{{ $home }}"><img class="brand-logo" src="/logo-mark.webp" alt="" width="64" height="64"><span class="brand-copy"><strong>ALARABIYA</strong><small>{{ $arabic ? 'أكاديمية القرآن واللغة العربية' : 'Quran & Arabic Academy' }}</small></span></a><p>{{ $arabic ? 'تعلّم بوضوح. وانمُ بالإيمان.' : 'Learn with clarity. Grow with faith.' }}</p></div><div><strong>{{ $arabic ? 'استكشف' : 'Explore' }}</strong><a href="{{ $home }}#programs">{{ $arabic ? 'البرامج' : 'Programs' }}</a><a href="{{ $home }}#teacher-profiles">{{ $arabic ? 'معلمونا' : 'Our teachers' }}</a><a href="{{ $home }}#faq">{{ $arabic ? 'الأسئلة الشائعة' : 'Common questions' }}</a></div><div><strong>{{ $arabic ? 'ابدأ الآن' : 'Get started' }}</strong><a href="{{ $home }}#enroll">{{ $arabic ? 'احجز حصة مجانية' : 'Book a free lesson' }}</a><a href="mailto:{{ $settings->contact_email }}">{{ $settings->contact_email }}</a>@if($settings->whatsappUrl())<a href="{{ $settings->whatsappUrl() }}" target="_blank">WhatsApp</a>@endif</div></div><div class="footer-bottom"><p>© {{ now()->year }} {{ $arabic ? 'أكاديمية العربية. جميع الحقوق محفوظة.' : 'Alarabiya Academy. All rights reserved.' }}</p><div><a href="/privacy">{{ $arabic ? 'سياسة الخصوصية' : 'Privacy policy' }}</a><a href="/terms">{{ $arabic ? 'شروط الاستخدام' : 'Terms of use' }}</a></div></div></footer>
</main>
</body>
</html>
