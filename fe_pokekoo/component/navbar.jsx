import styled from 'styled-components';
import React from 'react';
import Cookies from 'js-cookie';
import Router from 'next/router';

const Stylednav = styled.div`

  display: flex;
  align-items: center;
  flex-flow: column;
  height: 10%;
  width: 80%;
  padding: 20px;
  padding-bottom : 12px;
  margin-bottom: 1%;
  border: 1px solid #fffff;
  border-radius: 9px;
  background: #f7f7f7;
`;
const Logo = styled.img
`
border-radius: 10%;
max-width: 80%;
max-height: 80%;
`;
const Nav = styled.div
`  
display: flex;
align-items: center;
flex-flow: row;
`;

const Tab = styled.a
`
padding: 11px;
margin-left: 15px;
margin-right: 15px;
margin-top: 15px;
font-family: "Lucida Console", Monaco, monospace;
font-size: 23px;
cursor: pointer;
color:#5f8f45;
`;

class Navbar extends React.Component{
    componentDidMount()
    {
        const token = Cookies.get('token')
        if(token==null){
            Router.push('/');
        }
        console.log(token)
        document.body.style.backgroundColor = "#dbdbdb";
    }
    logOut = (e) =>{
        e.preventDefault();
        console.log('logout');
        Cookies.remove('token');
        Router.push('/');

    }
    render(){
        return(
           
            <Stylednav>
            <Logo src="/pokekoo.png" alt="pokekoo"/>
            <Nav>
                <Tab onClick={()=>Router.push('/forestpage')}>Forest</Tab> 
                <Tab onClick={()=>Router.push('/pokedexpage')}>Pokedex</Tab>
                <Tab onClick={this.logOut}>Logout</Tab>
            </Nav>
        </Stylednav>
        );
    }
}

export default Navbar;