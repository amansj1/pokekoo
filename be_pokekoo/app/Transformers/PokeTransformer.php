<?php 
namespace App\Transformers;
use App\Poke;
use League\Fractal\TransformerAbstract;



class PokeTransformer extends TransformerAbstract
{
    public function transform(Poke $poke)
    {
        return [
            'id'        => $poke->id,
            'user_id'   => $poke->user_id,
            'pokeName'  => $poke->pokeName,
            'pokeImg'   => $poke->pokeImg,
        ];
    }
}