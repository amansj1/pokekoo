<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;


use App\User;
use App\Transformers\UserTransformer;
use Auth;
class UserCon extends Controller
{
    public function profile(User $user)
    {
        $user = $user->find(Auth::user()->id);
        
        return fractal()
        ->item($user)
        ->transformWith(new UserTransformer)
        ->includePoke()
        ->toArray();
    }

    //
}
