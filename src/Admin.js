import DisplayInTable from "./DisplayInTable";
import { users } from "./Data";
import { useNavigate } from "react-router-dom";

function Admin(){
    var navigator = useNavigate()
    function editUser(index){
        navigator('/edit/'+(index+1))
    }
    
    return (
        <>
        <DisplayInTable data={users} editUser={editUser}  />
        </>
    )
}

export default Admin