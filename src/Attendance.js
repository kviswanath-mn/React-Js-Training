import { Button } from "antd";
import { useState } from "react";

function Attendance(){
    var user = {}
    var [people,setPeople] = useState([{
        name:"Viswa"
    }]) 
    function addName(event){
        user.name=event.target.value
    }

    function markAttendance(){
        
        people=[...people]
        people.push(user)
        setPeople(people)

    }
    return (
        <div>
            <input placeholder="name" onChange={addName}></input>
            <Button onClick={markAttendance}>SUBMIT</Button>
            {console.log(people)}
            {people.map((each)=>{
            return (
                <h1>{Object.values(each)}</h1>
            )
        })}
        </div>
    )
    
}
export default Attendance