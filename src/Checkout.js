import { Col, Row } from "antd";
import { Link, Outlet } from "react-router-dom";

export default function Checkout(){
    return(
        <>
        <h1>Checkout Component</h1>
        <Row>
            <Col span={6}>
            <Link to='/checkout/address'>Address</Link><br />
            <Link to='/checkout/payment'>Payment</Link>
            <div>Summary</div>
            </Col>

            <Col span={18}>
            <Outlet />
            </Col>
        </Row>
        </>
    )
}