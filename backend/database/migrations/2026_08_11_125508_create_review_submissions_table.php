<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('review_submissions', function (Blueprint $table) {
            $table->id();
            $table->string('teacher', 160);
            $table->string('reviewer_name', 100);
            $table->unsignedTinyInteger('rating');
            $table->text('review');
            $table->string('locale', 5)->default('en');
            $table->string('status', 30)->default('pending')->index();
            $table->text('admin_notes')->nullable();
            $table->text('source_url')->nullable();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->timestamp('emailed_at')->nullable();
            $table->timestamps();

            $table->index(['created_at', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('review_submissions');
    }
};
