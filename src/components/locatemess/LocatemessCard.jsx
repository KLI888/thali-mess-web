import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import './locatemess.css'
function LocatemessCard({ currentLocality, messes, filterMess }) {
    if (!messes || !messes[currentLocality] || typeof messes[currentLocality] !== 'object') {
        // Return a message or component indicating that no data is available
        return <div></div>;
    }

    const currentLocationData = messes[currentLocality];
    const currentMessesArray = Object.values(currentLocationData);


    return (
        <div className="locatemess_messcards">
            {/* <div className="messcard">
                <div className="mess_img">
                    <img src="https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Bhola_Mess_1710530558603.png&w=1920&q=75" alt="" />
                </div>
                <div className="mess_info">
                    <div className="mess_title">
                        <h1>Bhakti Mess</h1>
                        <p><img src={assets.dot} alt="" />Open</p>
                    </div>
                    <p className="mess_location">Ramanand Sagar</p>
                    <div className="mess_rating">
                        <div className="rating_star">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                        <p>(Good)</p>
                    </div>
                    <div className="mess_time">
                        <div className="day">
                            <i className='bx bxs-sun'></i>
                            <p>09:00 : 12:00</p>
                        </div>
                        <div className="night">
                            <i className='bx bxs-moon'></i>
                            <p>08:05 : 09:30</p>
                        </div>
                    </div>
                    <div className="mess_descInfo">
                        <div className="mess_price">
                            <p>Starts From</p>
                            <h1>₹ 2500/mo</h1>
                        </div>
                        <div className="mess_infoBtn">
                            <Link className="mess_btn_one" to="/locatemess/1">More Info</Link>
                            <Link className="mess_btn_two" to="">More Info</Link>
                        </div>
                    </div>
                </div>
            </div> */}
            {currentMessesArray.map((mess, index) => {
                if (filterMess) {
                    return <div className="messcard">
                        <div className="mess_img">
                            <img src="https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Bhola_Mess_1710530558603.png&w=1920&q=75" alt="" />
                        </div>
                        <div className="mess_info">
                            <div className="mess_title">
                                <h1>{mess.name}</h1>
                                <p><img src={assets.dot} alt="" />Open</p>
                            </div>
                            <p className="mess_location">Ramanand Sagar</p>
                            <div className="mess_rating">
                                <div className="rating_star">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                </div>
                                <p>(Good)</p>
                            </div>
                            <div className="mess_time">
                                <div className="day">
                                    <i className='bx bxs-sun'></i>
                                    <p>09:00 : 12:00</p>
                                </div>
                                <div className="night">
                                    <i className='bx bxs-moon'></i>
                                    <p>08:05 : 09:30</p>
                                </div>
                            </div>
                            <div className="mess_descInfo">
                                <div className="mess_price">
                                    <p>Starts From</p>
                                    <h1>₹ 2500/mo</h1>
                                </div>
                                <div className="mess_infoBtn">
                                    <Link className="mess_btn_one" to="/locatemess/1">More Info</Link>
                                    <Link className="mess_btn_two" to="">More Info</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            })}

        </div>
    )
}

export default LocatemessCard
