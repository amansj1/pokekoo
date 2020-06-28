<?php 
namespace App\Transformers;
use App\User;
use League\Fractal\TransformerAbstract;
use App\Transformers\PokeTransformer;
use Illuminate\Support\Collection;

class UserTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'poke'
    ];


    public function transform(User $user)
    {
        return [
            'id'        => $user->id,
            'name'      => $user->name,
            'email'     => $user->email,
            'registered'=> $user->created_at->diffForHumans(),
        ];
    }

    public function includePoke(User $user)
    {
        $poke = $user->poke;
        return $this->collection($poke, new PokeTransformer);
    }
}