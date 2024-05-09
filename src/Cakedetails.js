import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Space,Button } from "antd";
function Cakedetails(){
    const [searchParams,setSearchParams] = useSearchParams()
    var cakeid = searchParams.get("cakeid")
    var [cake, setCake] = useState({});
    // we are taking cake details from backend using cakeid
    useEffect(() => {
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/cake/"+cakeid,
            method: "get"
        }).then(
            (response) => {
                setCake(response.data.data);
                console.log(response.data.data)
            }, (error) => {
                console.log("no cake data found", error)
            }
        )
    },[])

    function addToCart(){
        var requestJson = {
            name:cake.name,
            cakeid:cake.cakeid,
            price:cake.price,
            image:cake.image,
            weight:1,
        }
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api" + "/addcaketocart",
            method:"post",
            data:requestJson,
            headers:{
                Authorization:localStorage.token
            }
        })
        alert("Added to Cart")
    }

    return (
        <>
        <Space direction="horizontal" style={{paddingLeft:50 , paddingTop:50}}>
            <img src={cake?.image} style={{height:250 , width:250}}/>
            <ul>
                <li>Name : {cake?.name}</li>
                <li>Price : {cake?.price}</li>
                <li>Rating : {cake?.ratings}</li>
                <li>Description : {cake?.description}</li>
                <li>Likes : {cake?.likes}</li>
                <li><Button type="primary" onClick={addToCart}>Add to Cart</Button></li>
            </ul>
        </Space>
        </>
    );
}
export default Cakedetails