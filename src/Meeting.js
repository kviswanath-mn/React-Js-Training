import { Button } from "antd";
import { useState } from "react";

function Meeting(){
    var [users,setUsers] = useState(0)

    function joinMeeting(){
        setUsers(users+1)
    }

    return(
        <div>
            <Button onClick={joinMeeting} type="primary">Join Meeting</Button><br />
            People Joined : <h1>{users}</h1>
        </div>
    )
}

export default Meeting