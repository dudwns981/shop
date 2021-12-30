import React, {useState,useEffect} from 'react'
import './Nav.css'
import {Link} from "react-router-dom"
function Nav() {
    const [show, setShow] = useState (true);
    const navbarscroll = () =>{
       if (window.scrollY > 100 ){
           setShow(false);
       }else{
           setShow(true);
       }
    }
    window.addEventListener('scroll',navbarscroll);
    return (
        <div>
    
      <div className="navbar">
        {/* // <nav className={`${show === true && 'navbar__scroll' || 'navbar'}`}> */}

            <div class="navbar__logo">
                <Link to="/"><img src={"https://www.balenciaga.com/on/demandware.static/-/Sites/default/dw67decde1/images/logo/BAL/logo.svg"} style={{width:"191px"},{height:"78px"}} alt=""/></Link>
            </div>
            
           
            <ul class="navbar__menu user">
                <Link to="/">대한민국</Link>
                <Link to="/cart">장바구니</Link>
                <Link to="/">로그인</Link>
                <Link to="/">주문확인</Link>
            </ul>
            
            
           
        </div>
        <div className='category' style={show ? {visibility:"visible"}:{visibility:"hidden"}}>
            <ul className='category__list'>         
                <Link to="/">여성 쇼핑</Link>
                <Link to="/list">남성 쇼핑</Link>
                <Link to="/">선물용</Link>
                <Link to="/">EXPLORE</Link>
            </ul>

        </div>

        </div>

    )
}

export default Nav