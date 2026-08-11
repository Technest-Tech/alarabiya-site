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
        Schema::create('site_settings', function (Blueprint $table) {
            $table->id();
            $table->string('contact_email', 160);
            $table->string('notification_email', 160);
            $table->string('whatsapp_number', 40)->nullable();
            $table->string('whatsapp_message', 500)->nullable();
            $table->string('facebook_url', 500)->nullable();
            $table->string('instagram_url', 500)->nullable();
            $table->string('youtube_url', 500)->nullable();
            $table->string('tiktok_url', 500)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('site_settings');
    }
};
