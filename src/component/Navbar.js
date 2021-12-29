import React, {useState,useEffect} from 'react'
import './Nav.css'
import {Link} from "react-router-dom"
function Nav() {
    const [show, setShow] = useState (false);
    const navbarscroll = () =>{
       if (window.scrollY > 100 ){
           setShow(true);
       }else{
           setShow(false);
       }
    }
    window.addEventListener('scroll',navbarscroll);
    return (
      <nav className="navbar">
        {/* // <nav className={`${show === true && 'navbar__scroll' || 'navbar'}`}> */}

            <div class="navbar__logo">
                <img src={"https://www.balenciaga.com/on/demandware.static/-/Sites/default/dw67decde1/images/logo/BAL/logo.svg"} alt=""/>
            </div>

            <ul class="navbar__menu category">
                <Link to="/">여성 쇼핑</Link>
                <Link to="/list">남성 쇼핑</Link>
                <Link to="/">선물용</Link>
                <Link to="/">EXPLORE</Link>
            </ul>
            <ul class="navbar__menu user">
                <Link to="/">대한민국</Link>
                <Link to="/cart">장바구니</Link>
                <Link to="/">로그인</Link>
                <Link to="/">주문확인</Link>
            </ul>

           
        </nav>

    )
}

export default Nav