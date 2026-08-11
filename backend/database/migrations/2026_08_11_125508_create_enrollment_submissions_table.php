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
        Schema::create('enrollment_submissions', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('email', 160);
            $table->string('phone', 40);
            $table->string('age_group', 60);
            $table->string('program', 120);
            $table->text('message')->nullable();
            $table->string('locale', 5)->default('en');
            $table->string('status', 30)->default('new')->index();
            $table->text('admin_notes')->nullable();
            $table->text('source_url')->nullable();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->timestamp('consented_at')->nullable();
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
        Schema::dropIfExists('enrollment_submissions');
    }
};
