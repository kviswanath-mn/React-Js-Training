import { Row } from "antd"
import Cake from "./Cake"


function CakelistArray(){
    var cakes=[{
        name:"chocolate cake",
        price:650,
        image:"choco_cake.jpeg",
        tag:"Best Seller"
    },
    {
        name:"red velvet cake",
        price:500,
        image:"red_velvet.jpg",
        tag:"Must Try"
    },

    {
        name:"vanilla cake",
        price:350,
        image:"vanilla.jpg"
    },
    {
        name:"strawberry cake",
        price:600,
        image:"strawberry.webp"
    }]

    return(
        <Row>
        {cakes.map((each)=>{
            return (
                <Cake data={each}/>
            )
        })}
        
        </Row>
    )
}

export default CakelistArray