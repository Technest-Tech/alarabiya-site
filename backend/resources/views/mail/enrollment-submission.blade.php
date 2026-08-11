<h1>New free lesson request</h1>
<p><strong>Name:</strong> {{ $submission->name }}</p>
<p><strong>Email:</strong> {{ $submission->email }}</p>
<p><strong>WhatsApp:</strong> {{ $submission->phone }}</p>
<p><strong>Age group:</strong> {{ $submission->age_group }}</p>
<p><strong>Program:</strong> {{ $submission->program }}</p>
<p><strong>Language:</strong> {{ strtoupper($submission->locale) }}</p>
<p><strong>Learning goals:</strong></p>
<p>{!! nl2br(e($submission->message ?: 'Not provided')) !!}</p>
<p><small>Saved in the Alarabiya Academy dashboard as lead #{{ $submission->id }}.</small></p>
