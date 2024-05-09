import {Alert, Button, Input} from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

function Login(){
   var user={}
   var navigate = useNavigate()

   if(localStorage.token!=undefined){
    return(<>
      <h2>You are already Logged in</h2>
      <Button  type='primary' onClick={Logout}>Log Out</Button>
    </>);}
    
    function changeEmail(event){
        user.email = event.target.value;
    }
    function changePassword(event){
        user.password = event.target.value;
    }

    function login(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/login",
            method:"post",
            data:user
        }).then((response) => {console.log("response = ",response);
        if(response.status == 200){
            localStorage.token = response.data.token;
            navigate("/");
        } else {
            localStorage.token = undefined;
            alert("Wrong Credentials")
        }
    }, (errors) => {console.log("error = ",errors);})
    }

    function Logout(){
        localStorage.removeItem('token')
        alert("You have been logged out")
        navigate("/")
    }

    return (<>
    <h1>Login Here</h1><br />
    <Input type="text" placeholder="Email" onChange={changeEmail}/><br/>
    <Input.Password type="text" placeholder="Password" onChange={changePassword}/><br/>
    <Button type="primary" onClick={login}>Login</Button>
    <Link to="/register"><Button type="primary">Sign up</Button></Link><br />
    <Link to="/forgot">Forgot Password</Link>
    </>);
}

export default Login;