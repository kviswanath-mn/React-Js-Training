import {Button, Input} from 'antd'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signup1(){
    var user = {}
    var navigate =useNavigate();

    function changeName(event){
        user.name = event.target.value;
    }
    function changeEmail(event){
        user.email = event.target.value;
    }
    function changePassword(event){
        user.password = event.target.value;
    }
    function createAccount(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/register",
            method:"post",
            data:user
        }).then((response) => {
            console.log("response = ",response);
            navigate("/login")
            alert("A mail has been sent.\nPlease verify")}, 
            (error) => {console.log("error = ",error)})

    }
    return (<>
    <h1>Sign Up</h1>
    <h2>Please enter your details here</h2>
    <Input type="text" placeholder="Name" onChange={changeName}/>
    <Input type="text" placeholder="Email" onChange={changeEmail}/>
    <Input type="text" placeholder="Password" onChange={changePassword}/>
    <Button type="primary" onClick={createAccount}>Sign up</Button> 
    </>);
}
export default Signup1;