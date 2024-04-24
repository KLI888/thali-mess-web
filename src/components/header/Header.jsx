import React, { useState } from 'react'
import {assets} from '../../assets/assets'

import './header.css'

function Header() {

    const [menuOn, setMenuOn] = useState(false);
    return (
        <header>
            <div className="navbar container">
                <div className="logo">
                    <a href="">
                        <img src={assets.logo} alt="" />
                    </a>
                </div>
                <div className="navbar_right">
                    <div className="navbar_links">
                        <div className="navar_ul">
                        <ul className={menuOn==true ? 'active' : ''}>
                            <li><a href="" className="active">Home</a></li>
                            <li><a href="">Locatemess</a></li>
                            <li><a href="">Addmess</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="/" className="navbar_btn">Sign In</a></li>

                            <i onClick={()=>{setMenuOn(false)}} class='bx bx-chevron-right'></i>
                        </ul>
                        </div>
                    </div>
                    <div className="toggle_menu">
                        <i onClick={()=>{setMenuOn(true)}} class='bx bx-chevron-left'></i>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
