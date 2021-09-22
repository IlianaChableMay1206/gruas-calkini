<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class vehiculos extends Model
{
    protected $table = 'vehiculos';

    //Relación de uno a muchos inversa
    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }

    public function chofer()
    {
        return $this->belongsTo('App\choferes', 'chofer_id');
    }
}
