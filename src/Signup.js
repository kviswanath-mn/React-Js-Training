function SignUp(){
    var email
    var pass
    var phone
    function display(){ 
        var user = {
            email : email,
            pass : pass,
            phone : phone
        }
        var st = "email : "+ user.email +"\n pass : "+user.pass+"\n phone : "+user.phone
        alert(st)
    }
    function handleEvent1(event){
     email=event.target.value
    }
    function handleEvent2(event){
        pass = event.target.value
       }
       function handleEvent3(event){
        phone = event.target.value
       }
    return(
        <div>
            <h1>create Account</h1>
            <input placeholder="email" onChange={handleEvent1}></input>
            <input placeholder="pass" onChange={handleEvent2}></input>
            <input placeholder="phone" onChange={handleEvent3}></input>
            <button onClick={display}>SUBMIT</button>
        </div>
    )
}
export default SignUp;