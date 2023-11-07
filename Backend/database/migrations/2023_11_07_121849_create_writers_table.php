<?php

use App\Models\Writer;
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
        Schema::create('writers', function (Blueprint $table) {
            $table->id('writer_id');
            $table->string('nev', 32);
            $table->integer('szul');
        });

        Writer::create(['nev' => 'Béla', 'szul' => '1997']);
        Writer::create(['nev' => 'Józsi', 'szul' => '1995']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('writers');
    }
};
