<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Grua extends Model
{
    //Relacion de uno a muchos inversa
    public function user()
    {
        return $this -> belongsTo('App\User', 'user_id');
    }
}
