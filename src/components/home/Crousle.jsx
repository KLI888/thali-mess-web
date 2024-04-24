import React, { useState, useEffect } from 'react'
import { assets } from '../../assets/assets'
import './home.css'
function Crousle({crousle}) {

    

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % crousle.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + crousle.length) % crousle.length);
    };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         nextSlide();
    //     }, 2000); // Change slide every 1.5 seconds

    //     return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
    // }, [currentIndex]);

    return (
        <div className="home_slider">
            <div className="slider_container">
                <div className="slider_control">
                    <div className="slider_btn">
                        <h1 onClick={prevSlide}><i class='bx bx-chevron-left'></i></h1>
                        <h1 onClick={nextSlide}><i class='bx bx-chevron-right'></i></h1>
                    </div>
                    <div className="slider_point">
                        {crousle.map((item, index) => (
                            <div onClick={()=>setCurrentIndex(index)} key={index} className={`point ${index === currentIndex ? 'active' : ''}`}></div>
                        ))}

                    </div>
                </div>
                <div className="slider_card">
                        <h1 className="card_title">{crousle[currentIndex].title}</h1>
                        <p className="card_desc">{crousle[currentIndex].desc}</p>
                        <div className="card_img">
                            <img src={crousle[currentIndex].img} alt="" />
                        </div>
                </div>
                {/* {crousle.map((item, index) => {
                    return <div className={`slider_card ${currentIndex==index ? 'active' : ''}`}>
                        <h1 className="card_title">{item.title}</h1>
                        <p className="card_desc">{item.desc}</p>
                        <div className="card_img">
                            <img src={item.img} alt="" />
                        </div>
                    </div>
                })} */}

            </div>
        </div>
    )
}

export default Crousle
