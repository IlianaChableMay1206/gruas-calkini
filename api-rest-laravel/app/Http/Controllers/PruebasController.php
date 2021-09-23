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
        echo "hola";
        $vehiculos = Vehiculo::all();
        foreach($vehiculos as $vehiculo)
        {
            echo "<h1>".$vehiculo -> title."</h1>";
            echo "<p>".$vehiculo -> content."<p>";
        }

        die();
    }
}
