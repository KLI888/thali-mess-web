import React from 'react'
import { assets } from '../../assets/assets'
import './home.css'
import Crousle from './Crousle'
import Homeinfo from './Homeinfo'
import Homelocate from './Homelocate'
import Contact from './Contact'
import Testomonials from './Testomonials'
function Home() {


    const crousle = [
        {
            title: "Chicken Tikka Masala",
            desc: "Tandoor grilled chicken marinated with yogurt and spices and simmered in a robust creamy sauce of tomatoes and cream.",
            img: assets.slid1
        },
        {
            title: "Shrimp Thali",
            desc: "Shrimp, mixed veggie curry, mustard greens, black lentil soup, pickled radish salad, lentil crackers, rice, gulaab jamun.",
            img: assets.slid2
        },
        {
            title: "Veggie Thali",
            desc: "Aaloo bhindi, cauliflower & potatoes, mustard greens, yellow lentil soup, cucumber salad, gulaab jamun",
            img: assets.slid3
        }
    ]

    const testomonials = [
        {
            img: "https://www.onlymess.in/images/testimoni/rushi.jpg",
            name: "Robert willliam",
            college: "COEP Student",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vitae beatae, quasi voluptate odio atque."
        },
        {
            img: "https://www.onlymess.in/images/testimoni/devendra.jpg",
            name: "Pavan Shimpi",
            college: "JSPM Student",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vitae beatae, quasi voluptate odio atque."
        },
        {
            img: "https://www.onlymess.in/images/testimoni/w2.png",
            name: "Rahul Kapse",
            college: "KCE Student",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vitae beatae, quasi voluptate odio atque."
        },
        {
            img: "https://www.onlymess.in/images/testimoni/sumit.png",
            name: "Nainesh Chaudhari",
            college: "KCE Student",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vitae beatae, quasi voluptate odio atque."
        }
    ]
    return (
        <section className="home_section">
            <div className="home_content container section">
                <Homeinfo />
                <Crousle crousle={crousle}/>
            </div>
            <div className="home_locatemess container section">
                <Homelocate />
            </div>
            <div className="home_contact">
                <Contact />
            </div>
            <div className="home_testomonials section">
                <Testomonials testomonials={testomonials} />
            </div>
        </section>
    )
}

export default Home
