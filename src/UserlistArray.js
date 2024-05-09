import { Alert,Card,Image,Row } from "antd"
import Datatable from "./Datatable";

function UserlistArray(){
    var users=[
        {name:"viswa",role:"dev"},
        {name:"shiva",role:"support",location:"miryalguda"},
        {name:"akash",role:"model",pincode:"500080"}
    ]
    
    return(
        <Row>
        {users.map((each)=>{
            var keys=Object.keys(each)
            return(
                <Card style={{width:200}} >
                    <Image height={150} src="usericon.jpg" />
                    {
                        keys.map((eachkey)=>{
                            return<p>{each[eachkey]}</p>
                        })
                    }
                </Card>
            )
        
        }
    )}
    </Row>   
    
);
}

export default UserlistArray