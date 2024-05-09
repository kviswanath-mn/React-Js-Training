import { Table } from "antd"
function DataTable()
{
var studentsdata=[
    {name:"viswa",role:"dev"},
    {name:"shiva",role:"support",location:"miryalguda"},
    {name:"akash",role:"model",pincode:"500080"}
]
var user=studentsdata[0]
// console.log(user)
var myset = new Set();
studentsdata.map((each)=>{
    var x= Object.keys(each)
    x.map((data)=>{
        myset.add(data)
    })
})
//console.log(myset)
var columns = [...myset]
// var columns=Object.keys(user)
var columns=columns.map((each)=>
    {
        return {
            title:each.toUpperCase(),
            dataIndex:each,
            key:each
        }
    })
return(
    <>
    <Table dataSource={studentsdata} columns={columns}></Table>
    </>
)
}
export default DataTable