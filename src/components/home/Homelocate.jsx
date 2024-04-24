import React, { useCallback, useState } from 'react'
import { assets } from '../../assets/assets';
function Homelocate() {

    const [showCity, setShowcity] = useState(false);
    const [showLocality, setLocality] = useState(false);

    return (
        <div className="home_locate">
            <div className="locate_mess">
                <h1>Locate Mess</h1>
                <div className="locatemess_content">
                    <div className="locatemess_select">
                        <div className="select_menu">
                            <div onClick={()=>{setShowcity(!showCity)}} className="select">
                                <span>Choose City</span>
                                <i class='bx bxs-chevron-down'></i>
                            </div>
                            <div className={`options_list ${showCity==true ? 'active' : ''}`}>
                                <div className="option">Pune</div>
                                <div className="option">Mumbai</div>
                                <div className="option">Jalgaon</div>
                            </div>
                        </div>
                        <br />
                        <div className="select_menu">
                            <div onClick={()=>{setLocality(!showLocality)}} className="select">
                                <span>Choose Locality</span>
                                <i class='bx bxs-chevron-down'></i>
                            </div>
                            <div className={`options_list ${showLocality==true ? 'active' : ''}`}>
                                <div className="option">Akurdi</div>
                                <div className="option">Talegov</div>
                                <div className="option">Bj Market</div>
                            </div>
                        </div>
                        <div className="findmess_btn">
                            <a href="">Find</a>
                        </div>
                    </div>
                    <div className="locatemess_img">
                        <img src={assets.deliveryBoy} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Homelocate
