import { useParams } from "react-router-dom";
import { users } from "./Data";

function EditUser(){
    var user=useParams()
    var userid=Number.parseInt(user.userid)
    var data=users.filter((each)=>
    {
        return each.id==userid
    })[0]
    var keys=Object.keys(data)
    return(
        <>
            {keys.map((key)=>
            {
                return(
                     <h3> {key}: {data[key]}
                </h3>
                )
               
            })}
        </>
    )      
}

export default EditUser