import React, { useState } from "react";
import './Navbar.css'
import logo from '../Asset/logo.png';
import cart_icon from '../Asset/cart_icon.png';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    console.log(menu)

    return (
        <div className="navbar">
            <div className="nav-logo">
                <Link to="/" style={{textDecoration:'none'}}><img src={logo} onClick={() => {setMenu("shopper")}}>
                </img></Link>
                <Link to="/" style={{textDecoration:'none'}}><p onClick={() => {setMenu("shopper")}}>SHOPPER</p></Link>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }} ><Link to="/" style={{textDecoration:'none'}}>Shop</Link>{menu==="shop"?<hr></hr>:<></>}</li>
                <li onClick={() => { setMenu("mens") }}><Link to="/mens" style={{textDecoration:'none'}}>Men</Link>{menu==="mens"?<hr></hr>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link to="/womens" style={{textDecoration:'none'}}>Women</Link>{menu==="womens"?<hr></hr>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to="/kids" style={{textDecoration:'none'}}>Kids</Link>{menu==="kids"?<hr></hr>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button onClick={() => {setMenu("button")}}><Link to="/login" style={{textDecoration:'none'}}>Login</Link></button>
                <Link to="/cart" style={{textDecoration:'none'}}><img src={cart_icon} onClick={() => {setMenu("cart")}}></img></Link>
                <div className="nav-cart-counter">0</div>
            </div>
        </div>
    )
}

export default Navbar;