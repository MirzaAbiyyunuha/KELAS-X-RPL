<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::table('orders', function (Blueprint $table) {
        $table->unsignedTinyInteger('status')->default(0)->change();
    });
}

public function down()
{
    Schema::table('orders', function (Blueprint $table) {
        // fallback kalau perlu
        $table->string('status')->change();
    });
}

};
