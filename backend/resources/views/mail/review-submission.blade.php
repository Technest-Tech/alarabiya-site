<h1>Teacher review awaiting moderation</h1>
<p><strong>Teacher:</strong> {{ $submission->teacher }}</p>
<p><strong>Reviewer:</strong> {{ $submission->reviewer_name }}</p>
<p><strong>Rating:</strong> {{ $submission->rating }}/5</p>
<p><strong>Language:</strong> {{ strtoupper($submission->locale) }}</p>
<p><strong>Review:</strong></p>
<p>{!! nl2br(e($submission->review)) !!}</p>
<p><small>Saved in the Alarabiya Academy dashboard as review #{{ $submission->id }}.</small></p>
