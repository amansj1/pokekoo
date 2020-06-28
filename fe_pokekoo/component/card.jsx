import styled from 'styled-components';
import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { API } from '../config';


const Kolomcard = styled.div
`
width: 100%;
display: block;
margin-bottom: 20px;
margin-left:4px;
float: left;
width: 15%;
padding: 0 4px;    
`;

const Card = styled.div
`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 12px;
  text-align: center;
  background-color: #fffff;
`;

const Gambar = styled.img
`
width : 100%;
height :100%;

`;

const Tombol = styled.button
`
background: #ff8019;
    color: #fff;
    padding: 11px;
    cursor: pointer;
    width: 40%;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
`;

const Namacard =  styled.div
`
font-family: "Lucida Console", Monaco, monospace;
margin:1px;
font-size:12px;
`;




class CardPoke extends React.Component{
    constructor(props){
        super(props);
        this.state={
            namaPokemon: this.props.namaPokemon,
            gambarUrl:this.props.urlPoK,
            token:Cookies.get('token'),
            toogle:this.props.toogle
           
        }

    }

    componentDidMount()
    { 

          
    } 
    posData = (e) =>{
        e.preventDefault();
        const dataPos ={
          pokeName: this.state.namaPokemon,
          pokeImg: this.state.gambarUrl
          
         };
         let config={
          headers:{
            'Accept': 'application/json',
            'Authorization': 'Bearer '+this.state.token
          }
         };
         axios.post(`${API}/pokedex/add`, dataPos, config)
         .then((response) => {
         alert(response.data.data.pokeName+' berhasil ditambahkan')
        //    console.log(response.data);
         }).catch(error => {
          alert(error.response.request.responseText);
         });
    }

    render(){

        if(this.state.toogle==1){
            return(
                <Kolomcard>
                <Card>
                   <Gambar src={this.state.gambarUrl}/>
                    <Namacard>{this.state.namaPokemon}</Namacard>
                    <a><Tombol onClick={this.posData} >SAVE</Tombol></a>
                </Card>
            </Kolomcard>
            );
        }else{
            return(
                <Kolomcard>
                <Card>
                   <Gambar src={this.state.gambarUrl}/>
                    <Namacard>{this.state.namaPokemon}</Namacard>
                </Card>
            </Kolomcard>
            );

        }
    
    }
}

export default CardPoke;