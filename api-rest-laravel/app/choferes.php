<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class choferes extends Model
{
    protected $table = 'choferes';

    //Relación de uno a muchos
    public function vehiculos()
    {
        return $this->hasMany('App\vehiculos'); 
    }
}
