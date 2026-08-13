<h1>New free lesson request</h1>
<p><strong>Name:</strong> {{ $submission->name }}</p>
@if($submission->email)<p><strong>Email:</strong> {{ $submission->email }}</p>@endif
<p><strong>WhatsApp:</strong> {{ $submission->phone }}</p>
<p><strong>Age group:</strong> {{ $submission->age_group }}</p>
@if($submission->program)<p><strong>Source / program:</strong> {{ $submission->program }}</p>@endif
<p><strong>Language:</strong> {{ strtoupper($submission->locale) }}</p>
@if($submission->message)<p><strong>Learning goals:</strong></p><p>{!! nl2br(e($submission->message)) !!}</p>@endif
<p><small>Saved in the Alarabiya Academy dashboard as lead #{{ $submission->id }}.</small></p>
