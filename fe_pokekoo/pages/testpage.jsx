import React , { useState }  from 'react'
import fetch from 'isomorphic-unfetch'
import Cookies from 'js-cookie';

import { API } from '../config';


const Testpage = ({pokemon =[] , token}) =>(

 
    <div>
       {console.log(pokemon.poke.data)}
       {console.log(token)}
      ss<h2>POKEMON FOREST  </h2>
       <ul>
        {pokemon.poke.data.map((pokemon)=>{return(
          <li>{pokemon.id}</li>
        )})}
         
       </ul>
    </div>
)



Testpage.getInitialProps = fetchData;

async function fetchData() {
  
  const token = Cookies.get('token')
  const initialURL = `${API}/profile`;
  let config={
    headers:{
      'Accept': 'application/json',
      'Authorization': 'Bearer '+token
    }
   };
  
  const fetchRes = await fetch(initialURL, config)
  const res = await fetchRes.json()
  

  return {
    pokemon: res,
    token
  }
}

  export default Testpage