import styled from 'styled-components';
import React from 'react';
import Head from 'next/head'
import Navbar from '../component/navbar';
import CardPoke from '../component/card';
import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';
import Router from 'next/router';



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

const Forestpage = ({pokemon = [],token, count}) =>(

    <Wrapper>
       <Head>
                <title>Forest Page : POKEKOO</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
      <Navbar/>
        <Styleddiv>
            <h2>POKEMON FOREST <Reload onClick={()=>Router.push('/forestpage')}> reload page </Reload> </h2>
             <Bariscard> 
                {pokemon.map(pokemon =>{ return(

                    <CardPoke namaPokemon={pokemon.name} toogle='1' urlPoK={pokemon.sprites.front_default} key={pokemon.name}/>
                
                )})}
             </Bariscard>
         </Styleddiv>
     </Wrapper>
   
)


  
  export function getPokemon({ url }) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}




Forestpage.getInitialProps = fetchData;

async function fetchData() {
  const rand = Math.round(Math.random() * (964 - 1) + 1);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon?offset='+rand+'&limit=30';
  
  const fetchRes = await fetch(initialURL)
  const res = await fetchRes.json()
  
  const data = res.results
  const count = res.count 

  const token = Cookies.get('token')
 

  let pokemonData = await Promise.all(data.map(async pokemon => {
    let pokemonRecord = await getPokemon(pokemon)
    return pokemonRecord
  }))
 
  return {
    pokemon: pokemonData,
    count, token
  }
}



export default Forestpage

