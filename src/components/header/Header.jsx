import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './header.css';
import { Link, NavLink } from 'react-router-dom';

function Header({setShowLogin}) {
    const [menuOn, setMenuOn] = useState(false);
    const [menu, setMenu] = useState("home");

    return (
        <header>
            <div className="navbar container">
                <div className="logo">
                    <Link to="/" onClick={()=> setMenu("home")}>
                        <img src={assets.logo} alt="" />
                    </Link>
                </div>
                <div className="navbar_right">
                    <div className="navbar_links">
                        <div className="navar_ul">
                            <ul className={menuOn === true ? 'active' : ''}>
                                <li><NavLink to="/" onClick={() => {setMenu("home"); setMenuOn(false)}} className={menu === "home" ? "active" : ""}>Home</NavLink></li>
                                <li><NavLink onClick={() => {setMenu("locate"); setMenuOn(false) }} className={menu === "locate" ? "active" : ""} to="/locatemess">Locatemess</NavLink></li>
                                <li><NavLink onClick={() => {setMenu("addmess"); setMenuOn(false)}} className={menu === "addmess" ? "active" : ""} to="/addmess">Addmess</NavLink></li>
                                <li><NavLink onClick={() => {setMenu("about"); setMenuOn(false)}} className={menu === "about" ? "active" : ""} to="/about">About</NavLink></li>
                                <li onClick={()=>setShowLogin(true)}><NavLink className="navbar_btn" to="/" >Sign In</NavLink></li>
                                <li><i onClick={() => { setMenuOn(false) }} className='bx bx-chevron-right'></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="toggle_menu">
                        <p onClick={() => { setMenuOn(true) }}><i className='bx bx-chevron-left'></i></p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
