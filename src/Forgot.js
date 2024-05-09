import { Button,Input } from "antd"
function Forgot(){
    var x
    function handleButtonClick(){
        alert('Reset link sent to email: '+x)
    }

    function handleEmail(event){
        x=event.target.value
    }
    
    return(
        <div>
        <h1>Forgot your password?</h1>
        <Input placeholder="Enter email" onChange={handleEmail}></Input>
        <Button type="primary" onClick={handleButtonClick}>Submit</Button>
        </div>
    )
}

export default Forgot