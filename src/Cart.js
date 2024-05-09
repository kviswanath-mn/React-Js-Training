import { useEffect, useState } from "react"
import axios from "axios"
import { Space,Button } from "antd";
function Cart()
{
    var [cartItems,setCartItems] = useState([]);
    
    


    useEffect(()=>{
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/cakecart",
            method:"get",
            headers:{
                Authorization:localStorage.token
            }
        }).then((response)=>{
           
            console.log("Cart items response:", response);
            setCartItems(response.data.data)
        })
    },[])
    
    console.log()
    function removeItemFromCart(cakeid)
    {
        setCartItems(cartItems.filter((item)=> item.cakeid!=cakeid))
    }
    if(!localStorage.token){
        return(
            <>
            <h1>Please Login</h1>
            </>
        )
    }

    return (
        <>
            
            <h1>Your Cart</h1>
             <Space direction="vertical" style={{ paddingLeft: 100, paddingTop: 50 }}>
                {cartItems.map((item) => (
                    <div key={item._id}>
                        <img src={item.image} alt={item.name} style={{ height: 250, width: 250 }} />
                        <ul>
                            <li>Id: {item.cakeid}</li>
                            <li>Name: {item.name}</li>
                            <li>Price: {item.price}</li>
                        </ul>
                        <Button type="primary" onClick={()=>removeItemFromCart(item.cakeid)}>Remove</Button>
                    </div>
                ))}
            </Space> 
        </>
    );
    
    
}
export default Cart;