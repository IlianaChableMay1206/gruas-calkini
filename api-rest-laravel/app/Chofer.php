<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chofer extends Model
{
    protected $table = 'choferes';

    //Relacion de uno a muchos
    public function vehiculos()
    {
        return $this -> hasMany('App\Vehiculos');
    }
}
