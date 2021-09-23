<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vehiculo;
use App\Chofer;
use App\Grua;

class PruebasController extends Controller
{
    //

    public function testOrm()
    {
        $vehiculos = Vehiculo::all();
        var_dump($vehiculos);

        die();
    }
}
