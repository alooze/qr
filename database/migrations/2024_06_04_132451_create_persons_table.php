<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('persons', function (Blueprint $table) {
            $table->id();
            $table->integer('ulist_id');
            $table->integer('ulistline_id');
            $table->string('name');
            $table->string('surname');
            $table->string('middlename')->nullable();
            $table->string('dob')->nullable();
            $table->string('email');
            $table->string('phone');
            $table->string('addr')->nullable();
            $table->string('work')->nullable();
            $table->text('comment');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('persons');
    }
}
