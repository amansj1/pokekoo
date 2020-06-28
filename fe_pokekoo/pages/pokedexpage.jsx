import styled from 'styled-components';
import React from 'react';
import Head from 'next/head'
import Navbar from '../component/navbar';
import CardPoke from '../component/card';
import axios from 'axios';
import Cookies from 'js-cookie';
import Router from 'next/router';
import { API } from '../config';



const Wrapper = styled.div
`   display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const Styleddiv = styled.div`

  display: flex;
  align-items: Left;
  flex-flow: column;
  height: 10%;
  width: 80%;
  padding: 20px;
  padding-bottom : 40px;
  margin-bottom: 8% auto;
  margin-top: 13% auto;
  border: 1px solid #fffff;
  border-radius: 9px;
  background: #f7f7f7;
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
  
`;

const Bariscard = styled.div
`
  content: "";
  display: table;
  align-items: center;
  clear: both;
  margin:15px 20px;
`;
 const Reload = styled.button
 `
 background: #ff8019;
    color: #fff;
    padding: 11px;
    margin-top: 15px;
    width: 10%;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
 `;

const Pokedexpage = ({pokemon = [],token, count}) =>(

    <Wrapper>
       <Head>
         <title>Pokedex Page : POKEKOO</title>
         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      <Navbar/>
        <Styleddiv>
            <h2>POKEMON DEX {pokemon.data.name} </h2>
             <Bariscard> 
                {pokemon.data.poke.data.map(pokemon =>{ return(

                    <CardPoke namaPokemon={pokemon.pokeName} toogle='0' urlPoK={pokemon.pokeImg} key={pokemon.pokeName}/>
                
                )})}
             </Bariscard>
         </Styleddiv>
     </Wrapper>
   
)




Pokedexpage.getInitialProps = fetchData;

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



export default Pokedexpage

