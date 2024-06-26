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

    const [currentDay, setCurrentDay] = useState("Monday");
    const days = ["Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday", "Sunday"];

    const daysMeal = {
        "Monday": {
            "Breakfast": ["Tea", "Poha/Upama"],
            "Lunch": ["Dal Tadka", "Aloo Masala", "Puri", "Plain Rice"],
            "Evening Snacks": ["None"],
            "Dinner": ["Masala Rice", "Palak Paneer", "Paratha"],
        },
        "Tuesday": {
            "Breakfast": ["Tea", "Shira"],
            "Lunch": ["Dal Tadka", "Aloo Masala", "Puri", "Plain Rice"],
            "Evening Snacks": ["None"],
            "Dinner": ["Masala Rice", "Palak Paneer", "Paratha"],
        },
        "Wednesday": {
            "Breakfast": ["Tea", "Maggi"],
            "Lunch": ["Dal Tadka", "Aloo Masala", "Puri", "Plain Rice"],
            "Evening Snacks": ["None"],
            "Dinner": ["Masala Rice", "Palak Paneer", "Paratha"],
        },
        "Thrusday": {
            "Breakfast": ["Tea", "Pulav"],
            "Lunch": ["Dal Tadka", "Aloo Masala", "Puri", "Plain Rice"],
            "Evening Snacks": ["None"],
            "Dinner": ["Masala Rice", "Palak Paneer", "Paratha"],
        },
        "Friday": {
            "Breakfast": ["Tea", "Edli Samber"],
            "Lunch": ["Dal Tadka", "Aloo Masala", "Puri", "Plain Rice"],
            "Evening Snacks": ["None"],
            "Dinner": ["Masala Rice", "Palak Paneer", "Paratha"],
        },
        "Saturday": {
            "Breakfast": ["Tea", "Poha/Maggi"],
            "Lunch": ["Dal Tadka", "Aloo Masala", "Puri", "Plain Rice"],
            "Evening Snacks": ["None"],
            "Dinner": ["Masala Rice", "Palak Paneer", "Paratha"],
        },
        "Sunday": {
            "Breakfast": ["None"],
            "Lunch": ["None"],
            "Evening Snacks": ["None"],
            "Dinner": ["Masala Rice", "Palak Paneer", "Paratha"],
        }
    };
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
                                {days.map((day, index) => {
                                    return <li onClick={() => setCurrentDay(day)} className={day == currentDay ? "active" : ""}>{day}</li>
                                })}
                            </ul>
                        </div>
                        <div className="meal_content">
                            {Object.keys(daysMeal[currentDay]).map((mealType, index) => {
                                return (
                                    <div key={index} className="meal">
                                        <h2>{mealType}</h2>
                                        <ul>
                                            {daysMeal[currentDay][mealType].map((item, itemIndex) => (
                                                <li key={itemIndex}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                            
                        </div>
                    </div>
                </div>
                <div className="mess_intro">
                    <h2>Details Of Mess</h2>
                    <p>Welcome to <b>Tai Mess</b>, proudly owned by <b>Kavita Bhupesh Patil</b>. Located in Ramanand Nagar, we specialize in serving up delicious home-style meals with a personal touch. Join us for a culinary journey filled with flavor, comfort, and warmth.</p>
                </div>
            </div>
        </section>
    )
}

export default Messinfo
