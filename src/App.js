import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';
import {Button, Row} from 'antd';
import Navbar from './Navbar';
import Cake from './Cake'
import Cakelist from './Cakelist'
import UserList from './Userlist'
import CakelistArray from'./CakelistArray'
import UserlistArray from './UserlistArray';
import Datatable from './Datatable';
import Signup from './Signup';
import Meeting from './Meeting';
import Attendance from './Attendance';
import SignupState from './SignupState';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Forgot from './Forgot';
import ContactUs from './ContactUs';
import Admin from './Admin';
import EditUser from './EditUser';
import Signup1 from './Signup1';
import Search from './Search';
import CakeDetails from './Cakedetails';
import Checkout from './Checkout';
import Address from './Address';
import Payment from './Payment';
import Pagenotfound from './Pagenotfound';
import Cart from './Cart';


function App() {
    
      var name ="Viswa kota"
      
      return (
        
    //   <div>
    //     <UserList />
    //     <Navbar />
    //     <Home />
    //     <Login />
    //     <label> {name}</label>
    //     <Button type="primary">Demo antd</Button>
    //     {/* <Cakelist /> */}
    //     <CakelistArray />
    //     <UserlistArray />
    //     <Datatable />
    //     {/* <button onClick={Signup}>Sign up</button> */}
    //     <Signup />
    //     <Meeting />
    //     <Attendance />
    //     <SignupState />


    // </div>
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/signup' element={<SignupState></SignupState>}></Route>
      <Route path='/forgot' element={<Forgot></Forgot>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/contactus' element={<ContactUs />}></Route>
      <Route path='/cakelist' element={<Cakelist />}></Route>
      <Route path='/data' element={<Admin />}></Route>
      <Route path='/edit/:userid' element={<EditUser />}></Route>
      <Route path='/register' element={<Signup1 />}></Route>
      <Route path='/search' element={<Search />}></Route>
      <Route path='/cakedetails' element={<CakeDetails />}></Route>

      <Route path='/checkout' element={<Checkout />}>
        <Route path='address' element={<Address />}></Route>
        <Route path='payment' element={<Payment />}></Route>

      </Route>

      <Route path='/*' element={<Pagenotfound />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
      );
}

export default App;
