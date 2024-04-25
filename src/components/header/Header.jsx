import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './header.css';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    const [menuOn, setMenuOn] = useState(false);
    const [menu, setMenu] = useState("home");

    return (
        <header>
            <div className="navbar container">
                <div className="logo">
                    <Link to="/">
                        <img src={assets.logo} alt="" />
                    </Link>
                </div>
                <div className="navbar_right">
                    <div className="navbar_links">
                        <div className="navar_ul">
                            <ul className={menuOn === true ? 'active' : ''}>
                                <li><NavLink to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</NavLink></li>
                                <li><NavLink onClick={() => setMenu("locate")} className={menu === "locate" ? "active" : ""} to="/locatemess">Locatemess</NavLink></li>
                                <li><NavLink onClick={() => setMenu("addmess")} className={menu === "addmess" ? "active" : ""} to="/addmess">Addmess</NavLink></li>
                                <li><NavLink onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""} to="/about">About</NavLink></li>
                                <li><NavLink className="navbar_btn" to="/">Sign In</NavLink></li>
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
