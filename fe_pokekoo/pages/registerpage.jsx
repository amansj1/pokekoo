
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head'
import Router from 'next/router';
import axios from 'axios';
import { API } from '../config';
import Cookies from 'js-cookie'



const Wrapper = styled.div
`   display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;
const Logo = styled.img
`
border-radius: 10%;
max-width: 80%;
max-height: 80%;
`;
const StyledLogin = styled.form`

  display: flex;
  align-items: center;
  flex-flow: column;
  width: 30%;
  padding: 20px;
  padding-bottom : 90px;
  margin: 200px auto;
  border: 1px solid #fffff;
  border-radius: 9px;
  background: #f7f7f7;
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
  button {
    background: #ff8019;
    color: #fff;
    padding: 11px;
    margin-top: 15px;
    width: 80%;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;


const StyledInput = styled.input`
display: block;
width: 70%;
padding: 15px;
margin-top: 15px;
font-family: $font-family;
-webkit-appearance: none;
border: 0;
outline: 0;
transition: 0.3s;

&:focus {
    background: darken(#fff, 3%);
}
  
`;

const Registerlink = styled.div
`
margin-top: 12px;
font-family: monospace;
color: #4d7d5e;
font-size:90%;
width: 80%;
cursor: pointer;
align-text: center;
`


class Registerpage extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        name:"",
        email: "",
        password: ""
      }
    }
  
      handleSubmit(e){
      e.preventDefault();
      const databaru ={
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
        
       };
       let config={
        headers:{
          'Accept': 'application/json'
        }
       };
       axios.post(`${API}/auth/register`, databaru, config)
       .then((response) => {
         Router.push('/');
         alert('berhasil ditambahkan');
         console.log(response.data);
       }).catch(error => {
        alert(error.response.request.responseText);
       });
       
   }
           
  
      


    componentDidMount()
    {
      const token = Cookies.get('token')
      if(token!==null){
        Cookies.remove('token');
    }
      document.body.style.backgroundColor = "#dbdbdb";
    }
    render(){
        return(
        
          <Wrapper> 
           <Head>
                <title>Register Page : POKEKOO</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
          <StyledLogin onSubmit={this.handleSubmit.bind(this)}>
              <Logo src="/pokekoo.png" alt="pokekoo"/>
             
              <StyledInput 
              type="text" 
              placeholder="name"
              required
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })} />

              <StyledInput 
              type="email" 
              placeholder="email" 
              required
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}/>

              <StyledInput 
              type="password" 
              placeholder="password" 
              required
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}/>

              <button type="submit">SUBMIT</button>
            
              <Link href="/"><Registerlink><a><span>&#8592;</span><b> Have an account?</b></a></Registerlink></Link>
          </StyledLogin>
          
     </Wrapper>
          
        );
    }}

export default Registerpage;