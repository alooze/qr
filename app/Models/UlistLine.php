<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class UlistLine extends Model
{
    use HasFactory; //, Searchable;

    protected $guarded = '';

    public $asYouType = true;

    public function toSearchableArray()
    {
        // $array = $this->toArray();

        // Customize array...
        $array['line'] = implode('|', array_values(json_decode($this->data, true)));
        $array['id'] = $this->id;
        $array['ulist_id'] = $this->ulist_id;

        // dd($array);

        return $array;
    }

    public function ulist()
    {
        return $this->belongsTo(Ulist::class);
    }

    public function expandData()
    {
        return json_decode($this->data, true);
    }
}
