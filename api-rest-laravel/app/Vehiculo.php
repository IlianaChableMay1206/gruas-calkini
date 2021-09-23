<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vehiculo extends Model
{
    protected $table = 'vehiculos';

    //Relacion de uno a muchos inversa
    public function user()
    {
        return $this -> belongsTo('App\User', 'user_id');
    }

    public function chofer()
    {
        return $this -> belongsTo('App\Chofer', 'chofer_id');
    }
}
