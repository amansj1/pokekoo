<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Http\Requests;
use App\Poke;
use App\Transformers\PokeTransformer;
use Auth;

class PokeCon extends Controller
{
    public function add(Request $request, Poke $poke)
    {
        $this->validate($request,[
            'pokeName' => 'required',
            'pokeImg' => 'required'
        ]);
        $postdata = $poke->create([
            'user_id' => Auth::User()->id,
            'pokeName'=> $request->pokeName,
            'pokeImg'=> $request->pokeImg
        ]);

        $response = fractal()
        ->item($postdata)
        ->transformWith(new PokeTransformer)
        ->toArray();

        return response()->json($response,201);
    }
    //
}
