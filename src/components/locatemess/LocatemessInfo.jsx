import React, { useState } from 'react';
import './locatemess.css';
import { assets } from '../../assets/assets';

function LocatemessInfo({showCity, showLocality, setShowCity, setShowLocality, currentCity, currentLocality, handleCityChange, handleLocalityChange, handleFilterMess}) {
    const citys = ['Pune', 'Jalgaon'];
    const locations = {
        'Pune': ['Station Road', 'Akurdi', 'Talegov'],
        'Jalgaon': ['Fule market', 'Mj Area'],
    };



    return (
        <>
            <div className="locatemess_info">
                <h1>Choose your mess,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Swaad anusar!</h1>
                <div className="locatemess_select">
                    <div className="select_menu">
                        <div onClick={() => setShowCity(!showCity)} className="select">
                            <span>{currentCity}</span>
                            <i className='bx bxs-chevron-down'></i>
                        </div>
                        <div className={`options_list ${showCity ? 'active' : ''}`}>
                            {citys.map((city, index) => (
                                <div key={index} onClick={() => handleCityChange(city)} className="option">{city}</div>
                            ))}
                        </div>
                    </div>
                    <br />
                    <div className="select_menu">
                        <div onClick={() => setShowLocality(!showLocality)} className="select">
                            <span>{currentLocality}</span>
                            <i className='bx bxs-chevron-down'></i>
                        </div>
                        <div className={`options_list ${showLocality ? 'active' : ''}`}>
                            {locations[currentCity] && locations[currentCity].map((locality, index) => (
                                <div key={index} onClick={() => handleLocalityChange(locality)} className="option">{locality}</div>
                            ))}
                        </div>
                    </div>
                    <div className="findmess_btn">
                        <a onClick={() => handleFilterMess()}>Find</a>
                    </div>
                </div>
            </div>
            <div className="locatemess_img">
                <img src={assets.deliveryBoy} alt="" />
            </div>
        </>
    );
}

export default LocatemessInfo;
