import React, { useEffect, useState } from 'react'
import './messinfo.css'
function Messinfo() {

    const messImg = [
        "https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Tai_Mess_1710532308466.jpg&w=1920&q=75",
        "https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Tai_Mess_1710532311128.jpg&w=1920&q=75",
        "https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Tai_Mess_1710532312206.jpg&w=1920&q=75"
    ]
    const [messImgNo, setMessImgNo] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMessImgNo(prevNo => (prevNo + 1) % messImg.length);
        }, 2000); // Change slide every 1.5 seconds

        return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
    }, []);
  return (
    <section className="messinfo_section section">
        <div className="messinfo_content container">
            <h1>Tai mess</h1>
            <div className="mess_brief_info">
                <div className="mess_img">
                    <img src={messImg[messImgNo]} alt="" />
                </div>
                <div className="mess_info">
                    <p className="mess_location"><i class='bx bxs-map'></i> Ramanand Nagar, Jalgaon-425001</p>
                    <p className="mess_service">Amenities</p>
                    <ul>
                        <li>Seasonal Refreshments</li>
                    </ul>
                    <p className="mess_service">Services</p>
                    <ul>
                        <li>Dine-in</li>
                        <li>Takeaway</li>
                    </ul>
                    <p className="mess_service">Specialities</p>
                    <ul>
                        <li>Maharashtrian</li>
                        <li>Pure Veg</li>
                    </ul>
                    <a href="" className="order_btn">Order Enquiry</a>
                </div>
            </div>
            <div className="mess_plans">
                <div className="meal_plan">
                    <p>Per Meal Plan</p>
                    <h1>₹ 90</h1>
                    <ul>
                        <li><span>✔</span>Enjoy a delicious meal when you want</li>
                        <li><span>✔</span>Flexibility to choose your meals</li>
                        <li><span>✔</span>No un-necessary commitments</li>
                    </ul>
                </div>
                <div className="meal_plan_two">
                    <p>Monthly Plan</p>
                    <h1>₹ 90</h1>
                    <ul>
                        <li><span>✔</span>Enjoy a delicious meal when you want</li>
                        <li><span>✔</span>Flexibility to choose your meals</li>
                        <li><span>✔</span>No un-necessary commitments</li>
                    </ul>
                </div>
                <div className="meal_plan_three">
                    <p>Custom Plan</p>
                    <h1>₹ 90</h1>
                    <ul>
                        <li><span>✔</span>Enjoy a delicious meal when you want</li>
                        <li><span>✔</span>Flexibility to choose your meals</li>
                        <li><span>✔</span>No un-necessary commitments</li>
                    </ul>
                </div>
            </div>
            <div className="day_meal">
                <div className="day_meal_content">
                    <div className="days">
                        <h1>Meal As Per Days</h1>
                        <ul>
                            <li className="active">Monday</li>
                            <li>Tuesday</li>
                            <li>Wednesday</li>
                            <li>Thrusday</li>
                            <li>Friday</li>
                            <li>Saturday</li>
                            <li>Sunday</li>
                        </ul>
                    </div>
                    <div className="meal_content">
                        <div className="meal">
                            <h2>Breakfast</h2>
                            <ul>
                                <li>Tea</li>
                                <li>Poha/Upama/Upama</li>
                            </ul>
                        </div>
                        <div className="meal">
                            <h2>Lunch</h2>
                            <ul>
                                <li>Dal Tadka</li>
                                <li>Aloo Masala</li>
                                <li>Puri</li>
                                <li>Plain Rice</li>
                            </ul>
                        </div>
                        <div className="meal">
                            <h2>Evening Snacks</h2>
                            <ul>
                                <li>None</li>
                            </ul>
                        </div>
                        <div className="meal">
                            <h2>Dinner</h2>
                            <ul>
                                <li>masala Chawl</li>
                                <li>Palak Paneer</li>
                                <li>Paratha</li>
                                <li>Jeera Rice</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Messinfo
