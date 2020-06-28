<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;





Route::post('auth/register','AuthCon@register');
Route::post('auth/login','AuthCon@login');
Route::post('pokedex/add', 'PokeCon@add')->middleware('auth:api');
Route::get('profile','UserCon@profile')->middleware('auth:api');


