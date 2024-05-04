import React from 'react'

function Testomonials({ testomonials }) {
    return (
        <div className="testomonials container">
            <div className="testomonials_content">
                {testomonials.map((item, index) => {
                    return <div className="testomonials_card">
                        <div className="user_info">
                            <img src={item.img} alt="" />
                            <h2>{item.name} <br /><span><p>{item.college}</p></span></h2>
                        </div>
                        <div className="user_desc_star">
                            <p>{`"${item.desc}"`}</p>
                        </div>
                        <div className="user_rating">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Testomonials
