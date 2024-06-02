<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ulist extends Model
{
    use HasFactory;

    protected $guarded = '';

    public function lines()
    {
        return $this->hasMany(UlistLine::class);
    }

    public function expandHeader()
    {
        return json_decode($this->header, true);
    }
}
