import { Button, Input } from "antd";
import { useState } from "react";
import DisplayInTable from "./DisplayInTable";
function SignupState(){
    var person = {};
    function deleteUser(index){
        people.splice(index,1)
        setPeople([...people])
    }
    var [people,setPeople] = useState([]);
    function handleEmail(event){
        person.email = event.target.value;
    }
    function handlePassword(event){
        person.password = event.target.value;
    }
    function handleName(event){
        person.name = event.target.value;
    }
    function handleButtonClick(){
        people.push(person);
        people = [...people];
        setPeople(people);
    }    
    
    return (
        <>
            <h1> Sign up Page</h1>
            <h1>Create an Account</h1>
            <Input placeholder="Name" onChange={handleName}></Input>
            <Input placeholder="Email" onChange={handleEmail}></Input>
            <Input type="password" placeholder="Password" onChange={handlePassword}></Input>
            <Button type="primary" onClick={handleButtonClick}>Create</Button>
              
            <DisplayInTable deleteUser={deleteUser} data={people}/>
        </>
    )
}
export default SignupState;