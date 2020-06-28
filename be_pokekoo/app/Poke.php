<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Poke extends Model
{
    protected $table='transpoke';
    protected $fillable = [
        'user_id', 'pokeName', 'pokeImg'

    ];
    public $timestamps = true;
    //


    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
