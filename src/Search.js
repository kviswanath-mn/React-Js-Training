import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react";
import axios from "axios";
import Cake from "./Cake";
import { Row } from "antd";
function Search()
{
    var [url]=useSearchParams()
    var data=url.get('name')
   var [cakes,setCakes] = useState()
    useEffect(()=>{
        searchforcakes()
    },[cakes])

      function searchforcakes(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/searchcakes?q="+data,
            method:"get"
        }).then((response)=>{
            console.log("response coming from all cakes api" , response.data.data)
            setCakes(response.data.data)  
            // updating the state
        }, (error)=>{
            console.log("Error from all cakes api", error)
        })
    }
    
    
    return(<>
   
    <Row>
                {
                    cakes?.map((each,index)=>{
                        return <Cake data={each} key={index} />
                    })
                }
            </Row>
    </>)
}
export default Search