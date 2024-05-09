import { Button,Input,Menu } from "antd"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
function Navbar()
{
    var search
    var navigator=useNavigate()
    var [temp,setTemp]=useState()
    function search()
    {
        
        navigator('/search?name='+search)
    }
    function handleSearchEvent(event)
    {
        search=event.target.value
    }
    const items=[
        {label:<Link to='/'>Home</Link>},
        {label:<Link to='/cakelist'>Cakes</Link>},
        {label:<Link to='/login'>
            <Button type="primary">Login</Button>
        </Link>},
        {label:<Input placeholder="search" onChange={handleSearchEvent}></Input>} ,
        {label:<Button onClick={search}>Search</Button>},
        // {label:<Link to='/checkout'>
        //     <Button type="primary">Checkout</Button>
        // </Link>},
        {label:<Link to='/cart'>
        <Button type="primary">Cart</Button>
    </Link>}
        
    ]
    return(
        <Menu mode="horizontal" items={items}/>
    )
}
export default Navbar